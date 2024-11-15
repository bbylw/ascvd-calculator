const translations = {
    zh: {
        title: "PCE计算器 - ASCVD风险评估",
        header: "10年ASCVD风险评估计算器",
        sex: "性别",
        male: "男",
        female: "女",
        race: "种族",
        asian: "亚裔",
        white: "白人",
        aa: "非裔美国人",
        other: "其他",
        age: "年龄",
        totalChol: "总胆固醇",
        hdl: "高密度脂蛋白胆固醇 (HDL-C)",
        systolic: "当前收缩压 (mmHg)",
        bpTreat: "是否正在服用降压药",
        diabetes: "糖尿病",
        smoker: "吸烟",
        yes: "是",
        no: "否",
        calculate: "计算风险",
        result: "计算结果",
        riskScore: "10年ASCVD风险",
        lowRisk: "低风险",
        moderateRisk: "中等风险",
        highRisk: "高风险",
        advice: {
            lifestyle: "保持健康的生活方式",
            checkup: "定期体检",
            diet: "均衡饮食",
            exercise: "适量运动",
            statin: "考虑开始他汀类药物治疗",
            monitor: "定期监测血压和血脂",
            doctor: "建议立即就医",
            intervention: "需要积极的生活方式干预",
            medication: "可能需要药物治疗",
            control: "严格控制危险因素",
            followup: "每3-6个月复查一次",
            lowRisk: {
                lifestyle: "保持健康的生活方式",
                diet: "遵循健康饮食模式（地中海饮食）",
                exercise: "每周进行150-300分钟中等强度或75-150分钟高强度有氧运动",
                checkup: "建议每5年进行一次心血管风险评估",
                weight: "维持健康体重（BMI <25 kg/m²）",
                smoking: "如有吸烟，建议戒烟并寻求专业戒烟帮助",
                bp_treated: "已在服用降压药：\n- 血压控制目标<130/80 mmHg\n- 坚持服药并每周监测血压",
                bp_untreated: "有高血压但未服药：\n- 建议就医评估降压治疗\n- 血压控制目标<130/80 mmHg",
                diabetes: "如有糖尿病：\n- HbA1c控制目标<7%\n- 优先考虑SGLT2抑制剂\n- 定期监测血糖",
                lipids: "血脂管理建议：\n- LDL-C 目标值 <2.6 mmol/L (100 mg/dL)\n- 优先考虑生活方式干预\n- 每年监测血脂水平",
                guidelines: "提示：医疗指南会定期更新，请遵医嘱并关注最新指南建议。"
            },
            moderateRisk: {
                lifestyle: "加强生活方式干预",
                statin: "建议开始中等强度他汀类药物治疗",
                bp_treated: "已在服用降压药：\n- 血压控制目标<130/80 mmHg\n- 每月随访并调整用药",
                bp_untreated: "有高血压但未服药：\n- 建议立即开始降压治疗\n- 血压控制目标<130/80 mmHg",
                monitor: "每6个月进行血压和血脂监测",
                diabetes: "如有糖尿病：\n- HbA1c控制目标<7%\n- 优先使用SGLT2抑制剂\n- 考虑GLP-1受体激动剂\n- 每3个月监测血糖",
                followup: "建议每年进行心血管风险评估",
                lipids: "血脂管理建议：\n- LDL-C 目标值 <1.8 mmol/L (70 mg/dL)\n- 使用中等强度他汀（如阿托伐他汀20-40mg）\n- 如3个月未达标，考虑增加剂量\n- 每6个月监测血脂水平",
                guidelines: "提示：医疗指南会定期更新，请遵医嘱并关注最新指南建议。"
            },
            highRisk: {
                doctor: "建议立即就医进行专业评估和治疗",
                statin: "他汀类药物治疗：\n- 使用高强度他汀（阿托伐他汀40-80mg或瑞舒伐他汀20-40mg）\n- 如不耐受，考虑中等强度他汀联合依折麦布\n- 监测肝功能和肌酶",
                bp_treated: "已在服用降压药：\n- 血压控制目标<130/80 mmHg\n- 考虑联合用药策略\n- 每周监测血压",
                bp_untreated: "有高血压但未服药：\n- 建议立即开始联合降压治疗\n- 血压控制目标<130/80 mmHg",
                diabetes: "如有糖尿病：\n- HbA1c控制目标<7%\n- 优先使用SGLT2抑制剂\n- 联合GLP-1受体激动剂\n- 严格监测血糖和肾功能",
                antiplatelet: "考虑使用阿司匹林进行一级预防（权衡出血风险）",
                lifestyle: "强化生活方式干预：\n- 限制钠摄入（<2000mg/日）\n- 严格执行地中海饮食\n- 每周运动时间>300分钟\n- 戒烟限酒",
                followup: "每3个月随访一次",
                lipids: "血脂管理建议：\n- LDL-C 目标值 <1.4 mmol/L (55 mg/dL)\n- 使用高强度他汀\n- 如6-8周未达标，联合依折麦布\n- 如仍未达标，考虑PCSK9抑制剂\n- 每3个月监测血脂水平",
                monitor: "定期监测：\n- 每周血压监测\n- 每3个月血脂监测\n- 每3-6个月肝功能和肌酶\n- 每年评估肾功能",
                guidelines: "提示：医疗指南会定期更新，请遵医嘱并关注最新指南建议。\n建议定期就医，及时了解最新的治疗方案。"
            }
        },
        units: {
            mgdl: "mg/dL",
            mmoll: "mmol/L",
            switchUnit: "切换单位",
            cholesterol: {
                mgdl: "mg/dL",
                mmoll: "mmol/L"
            },
            hint: {
                mgdl: "mg/dL",
                mmoll: "mmol/L"
            }
        },
        errors: {
            header: "输入错误",
            ageInvalid: "年龄必须在20-90岁之间",
            cholInvalid: "总胆固醇值超出可接受范围",
            hdlInvalid: "HDL胆固醇值超出可接受范围",
            bpInvalid: "收缩压值超出可接受范围 (70-250 mmHg)"
        },
        warnings: {
            header: "注意",
            continue: "是否继续计算？\n(结果可能不够准确)",
            ageRange: "该计算器最适用于40-79岁人群，其他年龄段的计算结果仅供参考",
            cholRange: "总胆固醇值超出推荐范围，结果可能不够准确",
            hdlRange: "HDL胆固醇值超出推荐范围，结果可能不够准确",
            bpRange: "收缩压值超出推荐范围，结果可能不够准确"
        },
        validRange: "有效范围",
        hints: {
            systolic: "请填写当前的收缩压数值，无论是否在服用降压药",
            bpTreat: "如果目前正在服用降压药物，请选择'是'"
        },
        guidelineNotice: {
            title: "重要提示",
            content: [
                "本工具基于2019 ACC/AHA心血管疾病一级预防指南、2023 ADA糖尿病诊疗指南和2021 ESC心血管疾病预防指南。",
                "医疗指南会定期更新，建议：",
                "• 医生定期关注以下最新指南：\n" +
                "  - ACC/AHA心血管疾病预防指南\n" +
                "  - ADA糖尿病诊疗标准\n" +
                "  - ESC心血管疾病预防指南\n" +
                "  - 所在国家/地区权威循证指南",
                "• 患者应：\n" +
                "  - 定期就医复查\n" +
                "  - 遵医嘱进行治疗\n" +
                "  - 关注最新的疾病管理建议",
                "本评估仅供参考，具体诊疗方案请遵医嘱。"
            ]
        }
    }
}; 