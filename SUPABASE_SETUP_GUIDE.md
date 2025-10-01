# Supabase Setup Guide for Quote Form

이 가이드는 견적 문의 폼을 Supabase와 연동하는 방법을 설명합니다.

## 1. Supabase 프로젝트 생성

1. [Supabase](https://supabase.com)에 가입하고 로그인합니다
2. "New Project" 버튼을 클릭하여 새 프로젝트를 생성합니다
3. 프로젝트 이름, 데이터베이스 비밀번호, 리전을 설정합니다

## 2. 데이터베이스 테이블 생성

1. Supabase 대시보드에서 **SQL Editor**로 이동합니다
2. "New query" 버튼을 클릭합니다
3. 프로젝트 루트의 `supabase_setup.sql` 파일 내용을 복사하여 붙여넣습니다
4. "Run" 버튼을 클릭하여 실행합니다

이 스크립트는 다음을 생성합니다:
- `quote_requests` 테이블 (견적 요청 데이터 저장)
- `quote-attachments` 스토리지 버킷 (첨부 파일 저장)
- Row Level Security (RLS) 정책
- 인덱스

## 3. API 키 가져오기

1. Supabase 대시보드에서 **Settings** > **API**로 이동합니다
2. 다음 값들을 복사합니다:
   - **Project URL** (예: `https://xxxxx.supabase.co`)
   - **anon public** 키

## 4. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가합니다:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

복사한 값으로 `your-project-url`과 `your-anon-key`를 교체합니다.

## 5. 개발 서버 재시작

환경 변수를 적용하려면 개발 서버를 재시작합니다:

```bash
npm run dev
```

## 6. 테스트

1. 브라우저에서 `/quote` 페이지로 이동합니다
2. 견적 문의 폼을 작성하고 제출합니다
3. Supabase 대시보드의 **Table Editor**에서 `quote_requests` 테이블을 확인합니다
4. 제출된 데이터가 표시되는지 확인합니다

## 데이터베이스 구조

### quote_requests 테이블

| 컬럼명 | 타입 | 설명 |
|--------|------|------|
| id | UUID | 고유 식별자 (자동 생성) |
| created_at | TIMESTAMP | 생성 시간 (자동 생성) |
| name | TEXT | 고객 이름 |
| phone | TEXT | 전화번호 |
| company_name | TEXT | 회사명 |
| email | TEXT | 이메일 |
| product_type | TEXT | 제품 유형 |
| production_quantity | TEXT | 생산 수량 |
| width | TEXT | 너비 |
| height | TEXT | 높이 |
| bottom_side | TEXT | 하단 측면 |
| printing_method | TEXT | 인쇄 방법 |
| function | TEXT | 기능 |
| formulation | TEXT | 조제 |
| material | TEXT | 재료 |
| print_count | TEXT | 인쇄 매수 |
| product_information | TEXT | 제품 정보 |
| additional_input | TEXT | 추가 입력 사항 |
| attached_file_url | TEXT | 첨부 파일 URL |
| shape | TEXT | 모양 |
| surface | TEXT | 표면 |

## Storage 버킷

- **quote-attachments**: 견적 문의 시 업로드된 파일 저장
- Public 버킷으로 설정되어 URL로 직접 접근 가능

## 보안 정책 (RLS)

- **INSERT**: 누구나 견적 요청 제출 가능
- **SELECT**: 인증된 사용자만 견적 요청 조회 가능

## 문제 해결

### 연결 오류
- `.env.local` 파일이 올바르게 설정되었는지 확인
- 환경 변수 이름이 정확한지 확인 (`NEXT_PUBLIC_` 접두사 필수)
- 개발 서버를 재시작했는지 확인

### 데이터 저장 실패
- Supabase SQL Editor에서 `supabase_setup.sql`이 성공적으로 실행되었는지 확인
- RLS 정책이 올바르게 생성되었는지 확인
- 브라우저 콘솔에서 오류 메시지 확인

### 파일 업로드 실패
- Storage 버킷 `quote-attachments`가 생성되었는지 확인
- Storage 정책이 올바르게 설정되었는지 확인
