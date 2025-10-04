# React Hooks 규칙 가이드

## 🚨 중요한 React Hooks 규칙

### ❌ 잘못된 사용법 (조건부 Hook 호출)

```javascript
// ❌ 잘못된 예시
export default function MyComponent() {
  const { t, ready } = useTranslation('common')
  
  // 조건부 렌더링 후에 Hook 호출 - 에러 발생!
  if (!ready) {
    return <div>Loading...</div>
  }
  
  const [state, setState] = useState('') // ❌ 에러: Hook이 조건부로 호출됨
  const [count, setCount] = useState(0)   // ❌ 에러: Hook이 조건부로 호출됨
  
  useEffect(() => {                      // ❌ 에러: Hook이 조건부로 호출됨
    // ...
  }, [])
}
```

### ✅ 올바른 사용법 (Hook을 먼저 호출)

```javascript
// ✅ 올바른 예시
export default function MyComponent() {
  const { t, ready } = useTranslation('common')
  const [state, setState] = useState('') // ✅ Hook을 먼저 호출
  const [count, setCount] = useState(0)   // ✅ Hook을 먼저 호출
  
  useEffect(() => {                      // ✅ Hook을 먼저 호출
    // ...
  }, [])
  
  // 조건부 렌더링은 Hook 호출 후에
  if (!ready) {
    return <div>Loading...</div>
  }
  
  return (
    <div>
      {/* 컴포넌트 내용 */}
    </div>
  )
}
```

## 📋 React Hooks 규칙 체크리스트

### 1. Hook 호출 순서
- [ ] 모든 Hook은 컴포넌트의 최상위에서 호출
- [ ] 조건문, 반복문, 중첩 함수 내에서 Hook 호출 금지
- [ ] `if (!ready)` 같은 조건부 렌더링 **이전에** 모든 Hook 호출

### 2. Hook 호출 위치
```javascript
export default function Component() {
  // ✅ 1. 모든 Hook을 먼저 호출
  const { t, ready } = useTranslation('common')
  const [state, setState] = useState('')
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    // ...
  }, [])
  
  useCallback(() => {
    // ...
  }, [])
  
  // ✅ 2. 그 다음 조건부 렌더링
  if (!ready) {
    return <div>Loading...</div>
  }
  
  // ✅ 3. 마지막에 JSX 반환
  return <div>Content</div>
}
```

### 3. 일반적인 패턴

#### i18n과 함께 사용할 때
```javascript
export default function MyComponent() {
  // ✅ 모든 Hook을 먼저
  const { t, ready } = useTranslation('common')
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // ✅ 조건부 렌더링은 Hook 호출 후
  if (!ready || !mounted) {
    return <div>Loading...</div>
  }
  
  return <div>{t('content')}</div>
}
```

#### 상태 관리와 함께 사용할 때
```javascript
export default function MyComponent() {
  // ✅ 모든 Hook을 먼저
  const { t, ready } = useTranslation('common')
  const [activeTab, setActiveTab] = useState('default')
  const [isOpen, setIsOpen] = useState(false)
  
  const handleClick = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])
  
  // ✅ 조건부 렌더링은 Hook 호출 후
  if (!ready) {
    return <div>Loading...</div>
  }
  
  return (
    <div>
      <button onClick={handleClick}>
        {t('button_text')}
      </button>
    </div>
  )
}
```

## 🔧 Vercel 배포 시 주의사항

### 1. 빌드 전 체크
```bash
# ESLint로 Hook 규칙 확인
npm run lint

# 빌드 테스트
npm run build
```

### 2. 자주 발생하는 에러 패턴
- `useState`가 조건부로 호출됨
- `useEffect`가 조건부로 호출됨
- `useCallback`이 조건부로 호출됨
- `useMemo`가 조건부로 호출됨

### 3. 해결 방법
1. **모든 Hook을 컴포넌트 최상위로 이동**
2. **조건부 렌더링을 Hook 호출 후로 이동**
3. **Hook 호출 순서를 일관되게 유지**

## 🎯 실제 수정 예시

### Before (에러 발생)
```javascript
export default function MyComponent() {
  const { t, ready } = useTranslation('common')
  
  if (!ready) {
    return <div>Loading...</div>
  }
  
  const [state, setState] = useState('') // ❌ 에러
}
```

### After (수정됨)
```javascript
export default function MyComponent() {
  const { t, ready } = useTranslation('common')
  const [state, setState] = useState('') // ✅ 수정
  
  if (!ready) {
    return <div>Loading...</div>
  }
  
  return <div>Content</div>
}
```

## 📚 추가 리소스

- [React Hooks 규칙](https://react.dev/warnings/invalid-hook-call-warning)
- [ESLint React Hooks 플러그인](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [Next.js ESLint 설정](https://nextjs.org/docs/app/api-reference/config/eslint)

---

**💡 기억하세요**: React Hooks는 항상 컴포넌트의 최상위에서, 조건부 렌더링 이전에 호출해야 합니다!