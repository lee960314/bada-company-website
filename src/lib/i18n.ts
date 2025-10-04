import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// JSON 파일에서 번역 데이터를 동적으로 로드하는 함수
const loadTranslations = async () => {
  const languages = ['en', 'ko', 'zh-CN'];
  const resources: any = {};
  
  try {
    // 모든 언어의 번역 파일을 병렬로 로드
    const promises = languages.map(async (lang) => {
      try {
        const response = await fetch(`/locales/${lang}/common.json`);
        if (!response.ok) {
          throw new Error(`Failed to load ${lang} translations`);
        }
        const data = await response.json();
        return { lang, data };
      } catch (error) {
        console.error(`Error loading ${lang} translations:`, error);
        return { lang, data: {} };
      }
    });
    
    const results = await Promise.all(promises);
    
    results.forEach(({ lang, data }) => {
      resources[lang] = { common: data };
    });
    
    return resources;
  } catch (error) {
    console.error('Error loading translations:', error);
    return {};
  }
};

// 기본 fallback 번역 데이터 (JSON 로드 실패시)
const fallbackResources = {
  en: {
    common: {
      "header_title": "KJ FLEX PACK",
      "menu_home": "Home",
      "menu_products": "Products",
      "welcome_message": "Welcome to KJ FLEX PACK",
      "language_selector": "Language",
      "language_en": "English",
      "language_ko": "한국어",
      "language_zh": "中文",
      
      "quote_previous": "Previous",
      "quote_submit": "Submit",
      "quote_submitting": "Submitting...",
      "quote_width_mm": "Width (mm)",
      "quote_height_mm": "Height (mm)",
      "quote_bottom_side_mm": "Bottom/Side (mm)",
      
      "quote_shape_three_side_seal": "Three-side seal",
      "quote_shape_three_side_stand": "Three-side seal stand",
      "quote_shape_mm_zipper": "MM zipper",
      "quote_shape_mt_type": "MT type",
      "quote_shape_t_bag": "T-bag",
      "quote_shape_auto_roll": "Auto roll",
      "quote_shape_common_shape": "Common shape",
      
      "quote_surface_glossy": "Glossy",
      "quote_surface_matte": "Matte",
      
      "contact_description": "Have questions about our flexible packaging solutions? Our team is here to help. Fill out the form and we'll get back to you as soon as possible.",
      "contact_success_message": "Thank you for contacting us! We will get back to you soon.",
      "contact_error_message": "Failed to send message. Please try again.",
      "contact_sending": "Sending...",
      
      "about_contact": "Contact Us",
      
      "quote_material_other": "Other",
      "quote_product_type_placeholder": "e.g., Type 1, Type 2, etc.",
      "quote_quantity_placeholder": "Please enter the quantity",
      "quote_product_info_placeholder": "e.g., frozen dumplings, soups, face masks, etc.",
      "quote_additional_info_placeholder": "Please enter the content",
      
      "manufacturing_process_title": "Manufacturing Process",
      "manufacturing_process_breadcrumb": "Manufacturing Process",
      "manufacturing_process_flowchart_alt": "Manufacturing Process Flowchart",
      
      "production_capabilities_title": "Production Capabilities",
      "production_capabilities_description": "State-of-the-art equipment and rigorous quality standards",
      
      "process_step_printing": "Printing",
      "process_step_printing_desc": "Using engraved cylinders, the printing press reproduces customer-specified colors with precision on the packaging film.",
      "process_step_dry_lamination": "Dry Lamination",
      "process_step_dry_lamination_desc": "Adhesive is applied to the printed film surface and dried in a chamber before being laminated with secondary film layers.",
      "process_step_extrusion_coating": "Extrusion Coating",
      "process_step_extrusion_coating_desc": "Polyethylene is melted at over 300℃ and coated onto the printed film to enhance strength and barrier properties.",
      "process_step_converting_slitting": "Converting – Slitting",
      "process_step_converting_slitting_desc": "Large laminated rolls are slit into narrower reels for efficient handling in downstream production.",
      "process_step_converting_cutting": "Converting – Cutting",
      "process_step_converting_cutting_desc": "Films are cut to precise dimensions, creating pouches or packaging formats tailored to customer specifications.",
      "process_step_converting_spout": "Converting – Spout Insertion",
      "process_step_converting_spout_desc": "Caps or spouts are attached to the pouch top after cutting, enabling functionality for liquid and beverage packaging.",
      "process_step_heat_sealing": "Heat Sealing",
      "process_step_heat_sealing_desc": "The sealant layer of the laminated film is heat-pressed to form strong, leak-proof pouch seals.",
      "process_step_cold_seal": "Cold Seal Process",
      "process_step_cold_seal_desc": "A special adhesive is precisely applied to the inner surface of the film, allowing seal formation without heat—commonly used for snacks and confectionery.",
      
      "flexible_packaging_title": "Flexible Packaging",
      "flexible_packaging_breadcrumb": "Flexible Packaging",
      "flexible_packaging_process_title": "Product 2 Custom Manufacturing Process",
      "flexible_packaging_features_title": "Product 2 Product Features",
      
      "process_step_consultation": "Consultation",
      "process_step_consultation_desc": "We accurately understand customer requirements and propose optimal solutions.",
      "process_step_contract": "Contract",
      "process_step_contract_desc": "We finalize detailed product specifications and delivery dates and conclude contracts.",
      "process_step_material": "Material",
      "process_step_material_desc": "We select high-quality raw materials to ensure product quality.",
      "process_step_printing_custom": "Printing",
      "process_step_printing_custom_desc": "We perfectly express customer brands with precise printing technology.",
      "process_step_processing": "Processing",
      "process_step_processing_desc": "We process with state-of-the-art equipment to accurate size and shape.",
      "process_step_testing": "Testing",
      "process_step_testing_desc": "We select only perfect products through quality inspection.",
      "process_step_delivery": "Delivery",
      "process_step_delivery_desc": "We deliver quickly to customers with safe packaging.",
      
      "feature_high_quality_material": "High-Quality Material",
      "feature_high_quality_material_desc": "We use high-quality materials that meet food safety standards.",
      "feature_precise_printing": "Precise Printing",
      "feature_precise_printing_desc": "We provide clear and durable printing with state-of-the-art printing technology.",
      "feature_custom_manufacturing": "Custom Manufacturing",
      "feature_custom_manufacturing_desc": "We manufacture in various sizes and designs according to customer requirements."
    }
  },
  ko: {
    common: {
      "header_title": "KJ FLEX PACK",
      "menu_home": "홈",
      "menu_products": "제품",
      "welcome_message": "KJ FLEX PACK에 오신 것을 환영합니다",
      "language_selector": "언어 선택",
      "language_en": "English",
      "language_ko": "한국어",
      "language_zh": "中文",
      
      "quote_previous": "이전",
      "quote_submit": "제출",
      "quote_submitting": "제출 중...",
      "quote_width_mm": "폭 (mm)",
      "quote_height_mm": "높이 (mm)",
      "quote_bottom_side_mm": "바닥/측면 (mm)",
      
      "quote_shape_three_side_seal": "3면 밀봉",
      "quote_shape_three_side_stand": "3면 밀봉 스탠드",
      "quote_shape_mm_zipper": "MM 지퍼",
      "quote_shape_mt_type": "MT 타입",
      "quote_shape_t_bag": "T백",
      "quote_shape_auto_roll": "자동 롤",
      "quote_shape_common_shape": "일반 모양",
      
      "quote_surface_glossy": "광택",
      "quote_surface_matte": "매트",
      
      "contact_description": "플렉시블 포장 솔루션에 대한 질문이 있으신가요? 저희 팀이 도와드리겠습니다. 양식을 작성해 주시면 가능한 한 빨리 연락드리겠습니다.",
      "contact_success_message": "문의해 주셔서 감사합니다! 곧 연락드리겠습니다.",
      "contact_error_message": "메시지 전송에 실패했습니다. 다시 시도해 주세요.",
      "contact_sending": "전송 중...",
      
      "about_contact": "문의하기",
      
      "quote_material_other": "기타",
      "quote_product_type_placeholder": "예: 유형 1, 유형 2 등",
      "quote_quantity_placeholder": "수량을 입력해 주세요",
      "quote_product_info_placeholder": "예: 냉동만두, 스프, 페이스마스크 등",
      "quote_additional_info_placeholder": "내용을 입력해 주세요",
      
      "manufacturing_process_title": "제조 공정",
      "manufacturing_process_breadcrumb": "제조 공정",
      "manufacturing_process_flowchart_alt": "제조 공정 플로우차트",
      
      "production_capabilities_title": "생산 역량",
      "production_capabilities_description": "최첨단 장비와 엄격한 품질 기준",
      
      "process_step_printing": "인쇄",
      "process_step_printing_desc": "조각된 실린더를 사용하여 인쇄기가 포장 필름에 고객이 지정한 색상을 정밀하게 재현합니다.",
      "process_step_dry_lamination": "드라이 라미네이션",
      "process_step_dry_lamination_desc": "인쇄된 필름 표면에 접착제를 도포하고 챔버에서 건조한 후 보조 필름 층과 라미네이션합니다.",
      "process_step_extrusion_coating": "압출 코팅",
      "process_step_extrusion_coating_desc": "폴리에틸렌을 300℃ 이상에서 용융하여 인쇄된 필름에 코팅하여 강도와 차단 특성을 향상시킵니다.",
      "process_step_converting_slitting": "컨버팅 – 슬리팅",
      "process_step_converting_slitting_desc": "대형 라미네이션 롤을 더 좁은 릴로 슬리팅하여 하류 생산에서 효율적인 처리를 가능하게 합니다.",
      "process_step_converting_cutting": "컨버팅 – 커팅",
      "process_step_converting_cutting_desc": "필름을 정확한 치수로 절단하여 고객 사양에 맞춘 파우치 또는 포장 형태를 만듭니다.",
      "process_step_converting_spout": "컨버팅 – 스파우트 삽입",
      "process_step_converting_spout_desc": "절단 후 파우치 상단에 캡이나 스파우트를 부착하여 액체 및 음료 포장의 기능성을 제공합니다.",
      "process_step_heat_sealing": "히트 시일링",
      "process_step_heat_sealing_desc": "라미네이션된 필름의 시일런트 층을 열로 압착하여 강력하고 누수 방지 파우치 시일을 형성합니다.",
      "process_step_cold_seal": "콜드 시일 공정",
      "process_step_cold_seal_desc": "특수 접착제를 필름 내부 표면에 정밀하게 도포하여 열 없이도 시일 형성을 가능하게 합니다—과자와 제과류에 일반적으로 사용됩니다.",
      
      "flexible_packaging_title": "플렉시블 포장",
      "flexible_packaging_breadcrumb": "플렉시블 포장",
      "flexible_packaging_process_title": "제품 2 주문 제작 공정 프로세스",
      "flexible_packaging_features_title": "제품 2 제품 특징",
      
      "process_step_consultation": "상담",
      "process_step_consultation_desc": "고객의 요구사항을 정확히 파악하고 최적의 솔루션을 제안합니다.",
      "process_step_contract": "계약",
      "process_step_contract_desc": "상세한 제품 사양과 납기일을 확정하고 계약을 체결합니다.",
      "process_step_material": "원단",
      "process_step_material_desc": "고품질 원료를 선별하여 제품의 품질을 보장합니다.",
      "process_step_printing_custom": "인쇄",
      "process_step_printing_custom_desc": "정밀한 인쇄 기술로 고객의 브랜드를 완벽하게 표현합니다.",
      "process_step_processing": "가공",
      "process_step_processing_desc": "최첨단 장비로 정확한 크기와 형태로 가공합니다.",
      "process_step_testing": "테스트",
      "process_step_testing_desc": "품질 검사를 통해 완벽한 제품만을 선별합니다.",
      "process_step_delivery": "출고",
      "process_step_delivery_desc": "안전한 포장으로 고객에게 신속하게 배송합니다.",
      
      "feature_high_quality_material": "고품질 소재",
      "feature_high_quality_material_desc": "식품 안전 기준을 만족하는 고품질 소재를 사용합니다.",
      "feature_precise_printing": "정밀 인쇄",
      "feature_precise_printing_desc": "최첨단 인쇄 기술로 선명하고 내구성 있는 인쇄를 제공합니다.",
      "feature_custom_manufacturing": "맞춤 제작",
      "feature_custom_manufacturing_desc": "고객의 요구사항에 맞는 다양한 크기와 디자인으로 제작합니다."
    }
  },
  'zh-CN': {
    common: {
      "header_title": "KJ FLEX PACK",
      "menu_home": "首页",
      "menu_products": "产品",
      "welcome_message": "欢迎来到KJ FLEX PACK",
      "language_selector": "语言选择",
      "language_en": "English",
      "language_ko": "한국어",
      "language_zh": "中文",
      
      "quote_previous": "上一步",
      "quote_submit": "提交",
      "quote_submitting": "提交中...",
      "quote_width_mm": "宽度 (mm)",
      "quote_height_mm": "高度 (mm)",
      "quote_bottom_side_mm": "底部/侧面 (mm)",
      
      "quote_shape_three_side_seal": "三边封口",
      "quote_shape_three_side_stand": "三边封口立式",
      "quote_shape_mm_zipper": "MM拉链",
      "quote_shape_mt_type": "MT类型",
      "quote_shape_t_bag": "T袋",
      "quote_shape_auto_roll": "自动卷装",
      "quote_shape_common_shape": "常见形状",
      
      "quote_surface_glossy": "光泽",
      "quote_surface_matte": "哑光",
      
      "contact_description": "对我们的柔性包装解决方案有疑问吗？我们的团队随时为您提供帮助。填写表格，我们会尽快回复您。",
      "contact_success_message": "感谢您的联系！我们会尽快回复您。",
      "contact_error_message": "发送消息失败。请重试。",
      "contact_sending": "发送中...",
      
      "about_contact": "联系我们",
      
      "quote_material_other": "其他",
      "quote_product_type_placeholder": "例如：类型1、类型2等",
      "quote_quantity_placeholder": "请输入数量",
      "quote_product_info_placeholder": "例如：冷冻饺子、汤品、面膜等",
      "quote_additional_info_placeholder": "请输入内容",
      
      "manufacturing_process_title": "制造工艺",
      "manufacturing_process_breadcrumb": "制造工艺",
      "manufacturing_process_flowchart_alt": "制造工艺流程图",
      
      "production_capabilities_title": "生产能力",
      "production_capabilities_description": "最先进的设备和严格的质量标准",
      
      "process_step_printing": "印刷",
      "process_step_printing_desc": "使用雕刻滚筒，印刷机在包装薄膜上精确再现客户指定的颜色。",
      "process_step_dry_lamination": "干式复合",
      "process_step_dry_lamination_desc": "将粘合剂涂布在印刷薄膜表面，在腔室中干燥后与二次薄膜层复合。",
      "process_step_extrusion_coating": "挤出涂布",
      "process_step_extrusion_coating_desc": "聚乙烯在300℃以上熔化并涂布在印刷薄膜上，以增强强度和阻隔性能。",
      "process_step_converting_slitting": "转换 – 分切",
      "process_step_converting_slitting_desc": "将大型复合卷材分切成较窄的卷材，以便在下游生产中高效处理。",
      "process_step_converting_cutting": "转换 – 切割",
      "process_step_converting_cutting_desc": "将薄膜切割成精确尺寸，创建适合客户规格的袋装或包装格式。",
      "process_step_converting_spout": "转换 – 管口插入",
      "process_step_converting_spout_desc": "切割后将盖子或管口连接到袋装顶部，实现液体和饮料包装的功能。",
      "process_step_heat_sealing": "热封",
      "process_step_heat_sealing_desc": "复合薄膜的密封层通过热压形成坚固、防漏的袋装密封。",
      "process_step_cold_seal": "冷封工艺",
      "process_step_cold_seal_desc": "将特殊粘合剂精确涂布在薄膜内表面，允许无热密封形成——常用于零食和糖果。",
      
      "flexible_packaging_title": "柔性包装",
      "flexible_packaging_breadcrumb": "柔性包装",
      "flexible_packaging_process_title": "产品2定制制造工艺流程",
      "flexible_packaging_features_title": "产品2产品特点",
      
      "process_step_consultation": "咨询",
      "process_step_consultation_desc": "我们准确了解客户需求并提出最佳解决方案。",
      "process_step_contract": "合同",
      "process_step_contract_desc": "我们确定详细的产品规格和交货日期并签订合同。",
      "process_step_material": "材料",
      "process_step_material_desc": "我们选择高质量原材料以确保产品质量。",
      "process_step_printing_custom": "印刷",
      "process_step_printing_custom_desc": "我们通过精密印刷技术完美表达客户品牌。",
      "process_step_processing": "加工",
      "process_step_processing_desc": "我们使用最先进的设备加工成精确的尺寸和形状。",
      "process_step_testing": "测试",
      "process_step_testing_desc": "我们通过质量检查只选择完美的产品。",
      "process_step_delivery": "交付",
      "process_step_delivery_desc": "我们通过安全包装快速交付给客户。",
      
      "feature_high_quality_material": "高品质材料",
      "feature_high_quality_material_desc": "我们使用符合食品安全标准的高品质材料。",
      "feature_precise_printing": "精密印刷",
      "feature_precise_printing_desc": "我们通过最先进的印刷技术提供清晰耐用的印刷。",
      "feature_custom_manufacturing": "定制制造",
      "feature_custom_manufacturing_desc": "我们根据客户需求制造各种尺寸和设计。"
    }
  }
};

// i18n 초기화 - 더 안정적인 방식
i18n.use(initReactI18next).init({
  resources: fallbackResources,
  lng: 'en',
  fallbackLng: 'en',
  defaultNS: 'common',
  ns: ['common'],
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
  debug: process.env.NODE_ENV === 'development',
});

// 언어 변경 시 HTML lang 속성 업데이트
i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lng;
  }
});

// 클라이언트 사이드에서 JSON 파일 로드 (선택적)
if (typeof window !== 'undefined') {
  loadTranslations().then((loadedResources) => {
    if (Object.keys(loadedResources).length > 0) {
      i18n.addResourceBundle('en', 'common', loadedResources.en?.common || {}, true, true);
      i18n.addResourceBundle('ko', 'common', loadedResources.ko?.common || {}, true, true);
      i18n.addResourceBundle('zh-CN', 'common', loadedResources['zh-CN']?.common || {}, true, true);
    }
  }).catch((error) => {
    console.warn('Failed to load additional translations:', error);
  });
}

export default i18n;