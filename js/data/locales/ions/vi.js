// vi ion locale data
export const vi_ions = {
  "h_plus": {
    "name": "Hydrogen",
    "customData": {
      "level1": {
        "type": "Cation / Axit",
        "source": "Các Axit (HCl, H₂SO₄) - Mất 1 e⁻",
        "phase": "Dung dịch nước (aq dạng H₃O⁺) - Không màu",
        "valence": "0 (Vỏ trống)",
        "keyCompounds": [
          {
            "formula": "HCl",
            "name": "Axit dạ dày"
          },
          {
            "formula": "H₂SO₄",
            "name": "Axit bình ắc-quy"
          }
        ]
      },
      "level2": {
        "molarMass": "1.008 g/mol",
        "subatomic": "1 p⁺ | 0 e⁻",
        "statusBanner": "Định nghĩa độ axit (pH)",
        "slotA": {
          "label": "Thử giấy quỳ",
          "result": "Chuyển đỏ",
          "desc": "Giấy quỳ xanh chuyển đỏ"
        },
        "slotB": {
          "label": "Khả năng phản ứng",
          "result": "Sủi bọt",
          "desc": "với Cacbonat"
        }
      },
      "level3": {
        "config": "[1s]⁰ (Vỏ trống)",
        "oxidation": "+1",
        "ionicRadius": "~0.84 fm (Hạt nhân trần)",
        "hydrationEnthalpy": "-1091 kJ/mol (Rất cao)",
        "coordination": "1 (Liên kết với cặp electron đơn)"
      },
      "level4": {
        "discoveryYear": "1884 (Xác định khái niệm)",
        "discoveredBy": "Svante Arrhenius",
        "namedBy": "Greek Hydro (Nước) + Genes (Tạo ra)",
        "stse": [
          "Axit hóa đại dương (gây hại san hô)",
          "Mưa axit (phá hủy rừng)."
        ],
        "commonUses": [
          "Dung môi (Axit dạ dày)",
          "Ắc-quy xe hơi (Chất điện ly)."
        ],
        "hazards": [
          "Ăn mòn (Bỏng hóa học)."
        ]
      }
    }
  },
  "li_plus": {
    "name": "Lithium",
    "customData": {
      "level1": {
        "type": "Cation Kim loại kiềm",
        "source": "Nguyên tố nhóm 1 - Mất 1 e⁻",
        "phase": "Dung dịch nước (aq) - Không màu",
        "valence": "0 (Bộ đôi bền)",
        "keyCompounds": [
          {
            "formula": "Li-ion",
            "name": "Pin"
          },
          {
            "formula": "Li₂CO₃",
            "name": "Thuốc"
          }
        ]
      },
      "level2": {
        "molarMass": "6.94 g/mol",
        "subatomic": "3 p⁺ | 2 e⁻",
        "statusBanner": "Đẳng electron với Heli",
        "slotA": {
          "label": "Thử ngọn lửa",
          "result": "Đỏ thẫm",
          "desc": "(670 nm)"
        },
        "slotB": {
          "label": "Dòng pin",
          "result": "Vận chuyển ion",
          "desc": "Trong các tế bào Li-ion"
        }
      },
      "level3": {
        "config": "[1s]² (Bộ đôi bền)",
        "oxidation": "+1",
        "ionicRadius": "76 pm (Nhỏ nhất trong kim loại kiềm)",
        "hydrationEnthalpy": "-519 kJ/mol (Cao)",
        "coordination": "4 (Tứ diện ngậm nước)"
      },
      "level4": {
        "discoveryYear": "1817",
        "discoveredBy": "Johan August Arfwedson",
        "namedBy": "Greek Lithos (Đá)",
        "stse": [
          "Cách mạng xe điện (Pin)",
          "Địa chính trị (\"Vàng trắng\")."
        ],
        "commonUses": [
          "Pin Li-ion (Điện thoại/Xe hơi)",
          "Y học (Rối loạn lưỡng cực)."
        ],
        "hazards": [
          "Độc (Ảnh hưởng đến thận)",
          "Ăn mòn (LiOH)."
        ]
      }
    }
  },
  "na_plus": {
    "name": "Natri",
    "customData": {
      "level1": {
        "type": "Cation Kim loại kiềm",
        "source": "Nguyên tố nhóm 1 - Mất 1 e⁻",
        "phase": "Dung dịch nước (aq) - Không màu",
        "valence": "8 (Bát tử bền)",
        "keyCompounds": [
          {
            "formula": "NaCl",
            "name": "Muối ăn"
          },
          {
            "formula": "Na₂CO₃",
            "name": "Soda"
          }
        ]
      },
      "level2": {
        "molarMass": "22.99 g/mol",
        "subatomic": "11 p⁺ | 10 e⁻",
        "statusBanner": "Luôn tan (Ion vượt qua tất cả)",
        "slotA": {
          "label": "Thử ngọn lửa",
          "result": "Vàng sáng",
          "desc": "(589 nm)"
        },
        "slotB": {
          "label": "Độ tan",
          "result": "Tan",
          "desc": "Ngay lập tức"
        }
      },
      "level3": {
        "config": "[Ne] (Bát tử bền)",
        "oxidation": "+1",
        "ionicRadius": "102 pm (Thu nhỏ từ 186 pm)",
        "hydrationEnthalpy": "-406 kJ/mol",
        "coordination": "6 (Bát diện)"
      },
      "level4": {
        "discoveryYear": "1807",
        "discoveredBy": "Humphry Davy",
        "namedBy": "Latin Natrium (Soda Ai Cập)",
        "stse": [
          "Sức khỏe cộng đồng (Tăng huyết áp)",
          "Muối đường phố gây ô nhiễm nguồn nước."
        ],
        "commonUses": [
          "Xung thần kinh",
          "Đèn đường",
          "Bảo quản thực phẩm."
        ],
        "hazards": [
          "An toàn khi là ion (Chất dinh dưỡng thiết yếu)."
        ]
      }
    }
  },
  "k_plus": {
    "name": "Kali",
    "customData": {
      "level1": {
        "type": "Cation Kim loại kiềm",
        "source": "Nguyên tố nhóm 1 - Mất 1 e⁻",
        "phase": "Dung dịch nước (aq) - Không màu",
        "valence": "8 (Bát tử bền)",
        "keyCompounds": [
          {
            "formula": "KCl",
            "name": "Phân bón"
          },
          {
            "formula": "KNO₃",
            "name": "Thuốc súng"
          }
        ]
      },
      "level2": {
        "molarMass": "39.10 g/mol",
        "subatomic": "19 p⁺ | 18 e⁻",
        "statusBanner": "Luôn tan (Ion vượt qua tất cả)",
        "slotA": {
          "label": "Thử ngọn lửa",
          "result": "Tím / Violet",
          "desc": "(766 nm)"
        },
        "slotB": {
          "label": "Sinh trưởng",
          "result": "Tác dụng phân bón",
          "desc": "Dinh dưỡng N-P-K"
        }
      },
      "level3": {
        "config": "[Ar] (Bát tử bền)",
        "oxidation": "+1",
        "ionicRadius": "138 pm (Lớn hơn Na⁺)",
        "hydrationEnthalpy": "-322 kJ/mol",
        "coordination": "6-8"
      },
      "level4": {
        "discoveryYear": "1807",
        "discoveredBy": "Humphry Davy",
        "namedBy": "Arabic al-qali (Potash)",
        "stse": [
          "An ninh lương thực (Phân bón)",
          "Bức xạ (K-40)."
        ],
        "commonUses": [
          "Phân bón N-P-K",
          "Xà phòng",
          "Chức năng cơ bắp."
        ],
        "hazards": [
          "Tăng kali máu (Ngừng tim)",
          "An toàn trong chế độ ăn uống."
        ]
      }
    }
  },
  "ag_plus": {
    "name": "Bạc",
    "customData": {
      "level1": {
        "type": "Cation Kim loại chuyển tiếp",
        "source": "Nguyên tố nhóm 11 - Mất 1 e⁻",
        "phase": "Dung dịch nước / Kết tủa",
        "valence": "18 (Khí hiếm giả)",
        "keyCompounds": [
          {
            "formula": "AgNO₃",
            "name": "Tan"
          },
          {
            "formula": "AgCl",
            "name": "Kết tủa trắng"
          }
        ]
      },
      "level2": {
        "molarMass": "107.87 g/mol",
        "subatomic": "47 p⁺ | 46 e⁻",
        "statusBanner": "Không tan trong Halide (Cl/Br/I)",
        "slotA": {
          "label": "Kết tủa",
          "result": "Đám mây trắng",
          "desc": "với Cl⁻"
        },
        "slotB": {
          "label": "Nhạy sáng",
          "result": "Sẫm màu",
          "desc": "dưới ánh sáng"
        }
      },
      "level3": {
        "config": "[Kr] 4d¹⁰ (Vỏ d đầy)",
        "oxidation": "+1",
        "ionicRadius": "115 pm (Tương tự K⁺)",
        "hydrationEnthalpy": "-473 kJ/mol",
        "coordination": "2 (Thẳng)"
      },
      "level4": {
        "discoveryYear": "Thời tiền sử",
        "discoveredBy": "Không rõ",
        "namedBy": "Latin Argentum",
        "stse": [
          "Chất thải ảnh (Lịch sử)",
          "Tác động của nano bạc."
        ],
        "commonUses": [
          "Nhiếp ảnh (Phim)",
          "Chăm sóc vết thương",
          "Điện tử."
        ],
        "hazards": [
          "Độc với sinh vật nước",
          "Argyria (Da xanh)."
        ]
      }
    }
  },
  "mg_2plus": {
    "name": "Magie",
    "customData": {
      "level1": {
        "type": "Cation Kim loại kiềm thổ",
        "source": "Nguyên tố nhóm 2 - Mất 2 e⁻",
        "phase": "Dung dịch nước (aq) - Không màu",
        "valence": "0 (Bát tử bền)",
        "keyCompounds": [
          {
            "formula": "MgO",
            "name": ""
          },
          {
            "formula": "Mg",
            "name": "Bột nhấp nháy"
          },
          {
            "formula": "MgSO₄",
            "name": "Epsom"
          }
        ]
      },
      "level2": {
        "molarMass": "24.31 g/mol",
        "subatomic": "12 p⁺ | 10 e⁻",
        "statusBanner": "Không tan trong OH⁻ & CO₃²⁻",
        "slotA": {
          "label": "Kết tủa",
          "result": "Gel trắng",
          "desc": "với Hydroxide"
        },
        "slotB": {
          "label": "Diệp lục",
          "result": "Nguyên tử trung tâm",
          "desc": "quang hợp"
        }
      },
      "level3": {
        "config": "[Ne] (Bát tử bền)",
        "oxidation": "+2",
        "ionicRadius": "72 pm (Mật độ điện tích cao)",
        "hydrationEnthalpy": "-1921 kJ/mol (Rất cao)",
        "coordination": "6 (Bát diện)"
      },
      "level4": {
        "discoveryYear": "1808",
        "discoveredBy": "Humphry Davy",
        "namedBy": "Greek Magnesia (Vùng đất)",
        "stse": [
          "Cặn nước cứng",
          "Động cơ quang hợp."
        ],
        "commonUses": [
          "Hợp kim (Linh kiện xe hơi)",
          "Thuốc kháng axit (Sữa Magie)."
        ],
        "hazards": [
          "An toàn (Chất dinh dưỡng thiết yếu)."
        ]
      }
    }
  },
  "ca_2plus": {
    "name": "Canxi",
    "customData": {
      "level1": {
        "type": "Cation Kim loại kiềm thổ",
        "source": "Nguyên tố nhóm 2 - Mất 2 e⁻",
        "phase": "Dung dịch nước (aq) - Không màu",
        "valence": "0 (Bát tử bền)",
        "keyCompounds": [
          {
            "formula": "CaCO₃",
            "name": "Đá vôi"
          },
          {
            "formula": "CaCl₂",
            "name": "Muối đường"
          }
        ]
      },
      "level2": {
        "molarMass": "40.08 g/mol",
        "subatomic": "20 p⁺ | 18 e⁻",
        "statusBanner": "Không tan trong Carbonate (CO₃²⁻)",
        "slotA": {
          "label": "Thử ngọn lửa",
          "result": "Đỏ gạch",
          "desc": "/ Cam"
        },
        "slotB": {
          "label": "Cấu trúc",
          "result": "Khoáng hóa",
          "desc": "Xương và vỏ sò"
        }
      },
      "level3": {
        "config": "[Ar] (Bát tử bền)",
        "oxidation": "+2",
        "ionicRadius": "100 pm (Thu nhỏ từ 197 pm)",
        "hydrationEnthalpy": "-1577 kJ/mol (Cao)",
        "coordination": "6-8"
      },
      "level4": {
        "discoveryYear": "1808",
        "discoveredBy": "Humphry Davy",
        "namedBy": "Latin Calx (Vôi)",
        "stse": [
          "Công nghiệp xi măng",
          "Axit hóa đại dương (CaCO₃)."
        ],
        "commonUses": [
          "Xi măng",
          "Tan băng",
          "Sức khỏe xương."
        ],
        "hazards": [
          "An toàn (Chất dinh dưỡng thiết yếu)."
        ]
      }
    }
  },
  "ba_2plus": {
    "name": "Barium",
    "customData": {
      "level1": {
        "type": "Cation Kim loại kiềm thổ mạnh",
        "source": "Nguyên tố nhóm 2 - Mất 2 e⁻",
        "phase": "Dung dịch nước / Chất rắn không tan",
        "valence": "0 (Bát tử bền)",
        "keyCompounds": [
          {
            "formula": "BaSO₄",
            "name": "Bữa ăn Barium"
          },
          {
            "formula": "BaCl₂",
            "name": "Độc"
          }
        ]
      },
      "level2": {
        "molarMass": "137.33 g/mol",
        "subatomic": "56 p⁺ | 54 e⁻",
        "statusBanner": "Không tan trong Sulfate (SO₄²⁻)",
        "slotA": {
          "label": "Thử ngọn lửa",
          "result": "Xanh lá táo",
          "desc": "(524 nm)"
        },
        "slotB": {
          "label": "Hình ảnh",
          "result": "Chắn X-quang",
          "desc": "(Tương phản)"
        }
      },
      "level3": {
        "config": "[Xe] (Bát tử bền)",
        "oxidation": "+2",
        "ionicRadius": "135 pm (Thu nhỏ từ 217 pm)",
        "hydrationEnthalpy": "-1305 kJ/mol",
        "coordination": "8-12"
      },
      "level4": {
        "discoveryYear": "1808",
        "discoveredBy": "Humphry Davy",
        "namedBy": "Greek Barys (Nặng)",
        "stse": [
          "An toàn chẩn đoán hình ảnh y tế",
          "Chất lỏng khoan."
        ],
        "commonUses": [
          "Chụp X-quang đường tiêu hóa",
          "Pháo hoa (Xanh lá)."
        ],
        "hazards": [
          "Độc (Liệt cơ) nếu tan được."
        ]
      }
    }
  },
  "zn_2plus": {
    "name": "Kẽm",
    "customData": {
      "level1": {
        "type": "Cation Kim loại chuyển tiếp",
        "source": "Nguyên tố nhóm 12 - Mất 2 e⁻",
        "phase": "Dung dịch nước (aq) - Không màu",
        "valence": "18 (Khí hiếm giả)",
        "keyCompounds": [
          {
            "formula": "ZnO",
            "name": "Kem chống nắng"
          },
          {
            "formula": "ZnCl₂",
            "name": "Chất hàn"
          }
        ]
      },
      "level2": {
        "molarMass": "65.38 g/mol",
        "subatomic": "30 p⁺ | 28 e⁻",
        "statusBanner": "Lưỡng tính (Tan trong Axit/Bazơ)",
        "slotA": {
          "label": "Kết tủa",
          "result": "Gel trắng",
          "desc": "(Tan được)"
        },
        "slotB": {
          "label": "Mạ kẽm",
          "result": "Bảo vệ thép",
          "desc": "Chống ăn mòn"
        }
      },
      "level3": {
        "config": "[Ar] 3d¹⁰ (Vỏ d đầy)",
        "oxidation": "+2",
        "ionicRadius": "74 pm (Thu nhỏ từ 134 pm)",
        "hydrationEnthalpy": "-2046 kJ/mol",
        "coordination": "4 (Tứ diện) hoặc 6"
      },
      "level4": {
        "discoveryYear": "1746",
        "discoveredBy": "Andreas Marggraf",
        "namedBy": "German Zink (Răng nhọn)",
        "stse": [
          "Kiểm soát ăn mòn",
          "Hỗ trợ miễn dịch."
        ],
        "commonUses": [
          "Chống gỉ sét",
          "Kem chống nắng",
          "Hợp kim (Đồng thau)."
        ],
        "hazards": [
          "Sốt khói kim loại (nếu hít phải)."
        ]
      }
    }
  },
  "al_3plus": {
    "name": "Nhôm",
    "customData": {
      "level1": {
        "type": "Cation hậu chuyển tiếp",
        "source": "Nguyên tố nhóm 13 - Mất 3 e⁻",
        "phase": "Dung dịch nước (aq) - Không màu",
        "valence": "0 (Bát tử bền)",
        "keyCompounds": [
          {
            "formula": "Al₂O₃",
            "name": "Sapphire"
          },
          {
            "formula": "KAl(SO₄)₂",
            "name": "Phèn chua"
          }
        ]
      },
      "level2": {
        "molarMass": "26.98 g/mol",
        "subatomic": "13 p⁺ | 10 e⁻",
        "statusBanner": "Kết tủa lưỡng tính (Gel trắng)",
        "slotA": {
          "label": "Oxy hóa",
          "result": "Lớp bảo vệ trong suốt",
          "desc": "Lớp Al₂O₃"
        },
        "slotB": {
          "label": "Kết tủa",
          "result": "Gel trắng",
          "desc": "Lưỡng tính"
        }
      },
      "level3": {
        "config": "[Ne] (Bát tử bền)",
        "oxidation": "+3",
        "ionicRadius": "54 pm (Nhỏ và điện tích cao)",
        "hydrationEnthalpy": "-4665 kJ/mol (Cực cao)",
        "coordination": "6 (Bát diện)"
      },
      "level4": {
        "discoveryYear": "1825",
        "discoveredBy": "Hans Christian Oersted",
        "namedBy": "Latin Alumen (Muối đắng)",
        "stse": [
          "Hiệu quả tái chế",
          "Chất thải bùn đỏ."
        ],
        "commonUses": [
          "Hợp kim hàng không",
          "Lon đồ hộp",
          "Xử lý nước."
        ],
        "hazards": [
          "Lo ngại về độc thần kinh."
        ]
      }
    }
  },
  "f_minus": {
    "name": "Florua",
    "customData": {
      "level1": {
        "type": "Anion Halogen",
        "source": "Nguyên tố nhóm 17 - Nhận 1 e⁻",
        "phase": "Dung dịch nước (aq) - Không màu",
        "valence": "8 (Bát tử bền)",
        "keyCompounds": [
          {
            "formula": "NaF",
            "name": "Kem đánh răng"
          },
          {
            "formula": "CaF₂",
            "name": "Fluorite"
          }
        ]
      },
      "level2": {
        "molarMass": "19.00 g/mol",
        "subatomic": "9 p⁺ | 10 e⁻",
        "statusBanner": "Không tan với Canxi (Ca²⁺)",
        "slotA": {
          "label": "Kết tủa",
          "result": "Chất rắn trắng",
          "desc": "với Ca²⁺"
        },
        "slotB": {
          "label": "Bảo vệ",
          "result": "Làm cứng men răng",
          "desc": "Ngăn ngừa sâu răng"
        }
      },
      "level3": {
        "config": "[Ne] (Bát tử bền)",
        "oxidation": "-1",
        "ionicRadius": "133 pm (Mở rộng từ 71 pm)",
        "hydrationEnthalpy": "-515 kJ/mol",
        "coordination": "4-8"
      },
      "level4": {
        "discoveryYear": "1886",
        "discoveredBy": "Henri Moissan",
        "namedBy": "Latin Fluere (Để chảy)",
        "stse": [
          "Tranh luận về fluor hóa nước",
          "Ô nhiễm Teflon."
        ],
        "commonUses": [
          "Ngăn ngừa sâu răng",
          "Chảo không dính",
          "Khắc axit."
        ],
        "hazards": [
          "Độc ở nồng độ cao (Fluorosis)."
        ]
      }
    }
  },
  "cl_minus": {
    "name": "Clorua",
    "customData": {
      "level1": {
        "type": "Anion Halogen",
        "source": "Nguyên tố nhóm 17 - Nhận 1 e⁻",
        "phase": "Dung dịch nước (aq) - Không màu",
        "valence": "8 (Bát tử bền)",
        "keyCompounds": [
          {
            "formula": "NaCl",
            "name": "Muối ăn"
          },
          {
            "formula": "AgCl",
            "name": "Kết tủa trắng"
          }
        ]
      },
      "level2": {
        "molarMass": "35.45 g/mol",
        "subatomic": "17 p⁺ | 18 e⁻",
        "statusBanner": "Không tan với Bạc (Ag⁺)",
        "slotA": {
          "label": "Kết tủa",
          "result": "Đám mây trắng",
          "desc": "với Ag⁺"
        },
        "slotB": {
          "label": "Vệ sinh",
          "result": "Khử trùng nước",
          "desc": "Hồ bơi và nước máy"
        }
      },
      "level3": {
        "config": "[Ar] (Bát tử bền)",
        "oxidation": "-1",
        "ionicRadius": "181 pm (Mở rộng từ 99 pm)",
        "hydrationEnthalpy": "-381 kJ/mol",
        "coordination": "6"
      },
      "level4": {
        "discoveryYear": "1774",
        "discoveredBy": "Carl Wilhelm Scheele",
        "namedBy": "Greek Chloros (Xanh nhạt)",
        "stse": [
          "Vệ sinh (Nước sạch)",
          "Ăn mòn từ muối đường."
        ],
        "commonUses": [
          "Muối ăn",
          "Axit dạ dày",
          "Nhựa PVC."
        ],
        "hazards": [
          "An toàn khi là ion (Chất dinh dưỡng thiết yếu)."
        ]
      }
    }
  },
  "br_minus": {
    "name": "Bromua",
    "customData": {
      "level1": {
        "type": "Anion Halogen",
        "source": "Nguyên tố nhóm 17 - Nhận 1 e⁻",
        "phase": "Dung dịch nước (aq) - Không màu",
        "valence": "8 (Bát tử bền)",
        "keyCompounds": [
          {
            "formula": "AgBr",
            "name": "Phim ảnh"
          },
          {
            "formula": "NaBr",
            "name": "Thuốc an thần"
          }
        ]
      },
      "level2": {
        "molarMass": "79.90 g/mol",
        "subatomic": "35 p⁺ | 36 e⁻",
        "statusBanner": "Không tan với Bạc (Kết tủa kem)",
        "slotA": {
          "label": "Kết tủa",
          "result": "Chất rắn kem",
          "desc": "với Ag⁺"
        },
        "slotB": {
          "label": "Chống cháy",
          "result": "Bình chữa cháy",
          "desc": "Chất chống cháy"
        }
      },
      "level3": {
        "config": "[Kr] (Bát tử bền)",
        "oxidation": "-1",
        "ionicRadius": "196 pm (Mở rộng từ 114 pm)",
        "hydrationEnthalpy": "-347 kJ/mol",
        "coordination": "6"
      },
      "level4": {
        "discoveryYear": "1826",
        "discoveredBy": "Antoine Balard",
        "namedBy": "Greek Bromos (Mùi hôi)",
        "stse": [
          "Phá hủy tầng ozone",
          "An toàn cháy nổ (Chất chống cháy)."
        ],
        "commonUses": [
          "Nhiếp ảnh",
          "Chất chống cháy",
          "Hồ bơi nước nóng."
        ],
        "hazards": [
          "Độc mãn tính (Bromism)."
        ]
      }
    }
  },
  "i_minus": {
    "name": "Iodua",
    "customData": {
      "level1": {
        "type": "Anion Halogen",
        "source": "Nguyên tố nhóm 17 - Nhận 1 e⁻",
        "phase": "Dung dịch nước (aq) - Không màu",
        "valence": "8 (Bát tử bền)",
        "keyCompounds": [
          {
            "formula": "KI",
            "name": "Muối iốt"
          },
          {
            "formula": "PbI₂",
            "name": "Mưa vàng"
          }
        ]
      },
      "level2": {
        "molarMass": "126.90 g/mol",
        "subatomic": "53 p⁺ | 54 e⁻",
        "statusBanner": "Không tan với Pb²⁺ (Màu vàng)",
        "slotA": {
          "label": "Kết tủa",
          "result": "Vàng sáng",
          "desc": "với Chì"
        },
        "slotB": {
          "label": "Tuyến giáp",
          "result": "Ngăn ngừa bướu cổ",
          "desc": "Muối iốt"
        }
      },
      "level3": {
        "config": "[Xe] (Bát tử bền)",
        "oxidation": "-1",
        "ionicRadius": "220 pm (Mở rộng lớn)",
        "hydrationEnthalpy": "-305 kJ/mol",
        "coordination": "6"
      },
      "level4": {
        "discoveryYear": "1811",
        "discoveredBy": "Bernard Courtois",
        "namedBy": "Greek Iodes (Tím)",
        "stse": [
          "Ngăn ngừa bướu cổ",
          "An toàn hạt nhân (Viên thuốc)."
        ],
        "commonUses": [
          "Muối iốt",
          "Chất khử trùng",
          "Gieo mây."
        ],
        "hazards": [
          "Độc tính thấp."
        ]
      }
    }
  },
  "o_2minus": {
    "name": "Oxit",
    "customData": {
      "level1": {
        "type": "Anion Chalcogen",
        "source": "Nguyên tố nhóm 16 - Nhận 2 e⁻",
        "phase": "Oxit rắn (Phản ứng với nước)",
        "valence": "8 (Bát tử bền)",
        "keyCompounds": [
          {
            "formula": "MgO",
            "name": ""
          },
          {
            "formula": "Fe₂O₃",
            "name": "Gỉ sét"
          },
          {
            "formula": "CaO",
            "name": ""
          }
        ]
      },
      "level2": {
        "molarMass": "16.00 g/mol",
        "subatomic": "8 p⁺ | 10 e⁻",
        "statusBanner": "Tạo dung dịch bazơ (OH⁻)",
        "slotA": {
          "label": "Tính bazơ",
          "result": "Tạo Hydroxide",
          "desc": "O²⁻ + H₂O → 2OH⁻"
        },
        "slotB": {
          "label": "Oxy hóa",
          "result": "Gỉ sét sắt",
          "desc": "Fe₂O₃ (Đỏ nâu)"
        }
      },
      "level3": {
        "config": "[Ne] (Bát tử bền)",
        "oxidation": "-2",
        "ionicRadius": "140 pm (Mở rộng từ 73 pm)",
        "hydrationEnthalpy": "Cao (Phản ứng)",
        "coordination": "4-6"
      },
      "level4": {
        "discoveryYear": "1774",
        "discoveredBy": "Priestley / Scheele",
        "namedBy": "Greek Oxys (Axit - sai lầm)",
        "stse": [
          "Chi phí ăn mòn",
          "Biến đổi khí hậu (CO₂)."
        ],
        "commonUses": [
          "Gốm sứ",
          "Bê tông",
          "Luyện quặng."
        ],
        "hazards": [
          "Ăn mòn (Bazơ mạnh)."
        ]
      }
    }
  },
  "s_2minus": {
    "name": "Sunfua",
    "customData": {
      "level1": {
        "type": "Anion Chalcogen",
        "source": "Nguyên tố nhóm 16 - Nhận 2 e⁻",
        "phase": "Quặng rắn / Dung dịch nước",
        "valence": "8 (Bát tử bền)",
        "keyCompounds": [
          {
            "formula": "H₂S",
            "name": "Khí trứng thối"
          },
          {
            "formula": "FeS₂",
            "name": "Pyrite"
          }
        ]
      },
      "level2": {
        "molarMass": "32.06 g/mol",
        "subatomic": "16 p⁺ | 18 e⁻",
        "statusBanner": "Kết tủa đen không tan (HgS, CuS)",
        "slotA": {
          "label": "Kết tủa",
          "result": "Chất rắn đen",
          "desc": "với các Kim loại"
        },
        "slotB": {
          "label": "Mùi",
          "result": "Trứng thối",
          "desc": "Khí H₂S"
        }
      },
      "level3": {
        "config": "[Ar] (Bát tử bền)",
        "oxidation": "-2",
        "ionicRadius": "184 pm (Mở rộng từ 100 pm)",
        "hydrationEnthalpy": "Cao",
        "coordination": "6"
      },
      "level4": {
        "discoveryYear": "Thời tiền sử",
        "discoveredBy": "Không rõ",
        "namedBy": "Sanskrit Sulvere",
        "stse": [
          "Nước thải mỏ axit",
          "Năng lượng địa nhiệt."
        ],
        "commonUses": [
          "Quặng kim loại (Sphalerite)",
          "Công nghiệp giấy."
        ],
        "hazards": [
          "Khí độc (H₂S)."
        ]
      }
    }
  },
  "n_3minus": {
    "name": "Nitrua",
    "customData": {
      "level1": {
        "type": "Anion Pnictogen",
        "source": "Nguyên tố nhóm 15 - Nhận 3 e⁻",
        "phase": "Chất rắn (Gốm sứ)",
        "valence": "8 (Bát tử bền)",
        "keyCompounds": [
          {
            "formula": "NH₃",
            "name": "Amoniac"
          },
          {
            "formula": "GaN",
            "name": "LED"
          }
        ]
      },
      "level2": {
        "molarMass": "14.01 g/mol",
        "subatomic": "7 p⁺ | 10 e⁻",
        "statusBanner": "Thủy phân tạo Amoniac (NH₃)",
        "slotA": {
          "label": "Thủy phân",
          "result": "Giải phóng Amoniac",
          "desc": "N³⁻ + 3H₂O → NH₃"
        },
        "slotB": {
          "label": "Đèn LED",
          "result": "Ánh sáng xanh",
          "desc": "Công nghệ GaN"
        }
      },
      "level3": {
        "config": "[Ne] (Bát tử bền)",
        "oxidation": "-3",
        "ionicRadius": "146 pm (Mở rộng lớn)",
        "hydrationEnthalpy": "Phản ứng mãnh liệt",
        "coordination": "4-6"
      },
      "level4": {
        "discoveryYear": "1772",
        "discoveredBy": "Daniel Rutherford",
        "namedBy": "Greek Nitron (Soda)",
        "stse": [
          "Đèn LED xanh (Giải Nobel)",
          "An toàn túi khí."
        ],
        "commonUses": [
          "Bán dẫn",
          "Lớp phủ siêu cứng."
        ],
        "hazards": [
          "Phản ứng mãnh liệt với nước."
        ]
      }
    }
  },
  "p_3minus": {
    "name": "Photphua",
    "customData": {
      "level1": {
        "type": "Anion Pnictogen",
        "source": "Nguyên tố nhóm 15 - Nhận 3 e⁻",
        "phase": "Chất rắn",
        "valence": "8 (Bát tử bền)",
        "keyCompounds": [
          {
            "formula": "AlP",
            "name": "Xông hơi khử trùng"
          },
          {
            "formula": "InP",
            "name": "Chip"
          }
        ]
      },
      "level2": {
        "molarMass": "30.97 g/mol",
        "subatomic": "15 p⁺ | 18 e⁻",
        "statusBanner": "Giải phóng Phosphine độc",
        "slotA": {
          "label": "Khí độc",
          "result": "Giải phóng Phosphine",
          "desc": "PH₃ (gây chết người)"
        },
        "slotB": {
          "label": "Điện tử",
          "result": "Chip tốc độ cao",
          "desc": "Bán dẫn InP"
        }
      },
      "level3": {
        "config": "[Ar] (Bát tử bền)",
        "oxidation": "-3",
        "ionicRadius": "212 pm (Mở rộng từ 110 pm)",
        "hydrationEnthalpy": "Phản ứng",
        "coordination": "4"
      },
      "level4": {
        "discoveryYear": "1669",
        "discoveredBy": "Hennig Brand",
        "namedBy": "Greek Phosphoros (Ánh sáng)",
        "stse": [
          "Kiểm soát dịch hại",
          "Tái chế rác điện tử."
        ],
        "commonUses": [
          "Bán dẫn",
          "Thuốc diệt chuột."
        ],
        "hazards": [
          "Khí cực độc."
        ]
      }
    }
  },
  "co3_2minus": {
    "name": "Cacbonat",
    "customData": {
      "level1": {
        "type": "Oxyanion",
        "source": "Axit carbonic (H₂CO₃) - Mất 2 H⁺",
        "phase": "Chất rắn (trong Muối) - Trắng",
        "valence": "24 tổng (Bát tử bền)",
        "keyCompounds": [
          {
            "formula": "CaCO₃",
            "name": "Đá vôi"
          },
          {
            "formula": "Na₂CO₃",
            "name": "Soda tro"
          }
        ]
      },
      "level2": {
        "molarMass": "60.01 g/mol",
        "subatomic": "1 C + 3 O | Điện tích -2",
        "statusBanner": "Không tan (trừ nhóm 1 và NH₄⁺)",
        "slotA": {
          "label": "Thử axit",
          "result": "CO₂",
          "desc": "Sủi bọt mạnh"
        },
        "slotB": {
          "label": "Kết tủa",
          "result": "Chất rắn trắng",
          "desc": "với Ca²⁺"
        }
      },
      "level3": {
        "config": "Tam giác phẳng (sp²)",
        "oxidation": "C là +4",
        "ionicRadius": "178 pm",
        "hydrationEnthalpy": "-1314 kJ/mol",
        "coordination": "Tam giác phẳng (120°)"
      },
      "level4": {
        "discoveryYear": "Thời cổ đại",
        "discoveredBy": "",
        "namedBy": "Latin Carbo (Than)",
        "stse": [
          "Axit hóa đại dương",
          "Chu trình Carbon",
          "Sản xuất xi măng."
        ],
        "commonUses": [
          "Thuốc kháng axit (Tums)",
          "Sản xuất thủy tinh",
          "Nấu ăn."
        ],
        "hazards": [
          "An toàn (Chất đệm máu thiết yếu)."
        ]
      }
    }
  },
  "c2o4_2minus": {
    "name": "Oxalate",
    "customData": {
      "level1": {
        "type": "Anion hữu cơ",
        "source": "Axit oxalic - Mất 2 H⁺",
        "phase": "Chất rắn (trong Muối) - Trắng",
        "valence": "34 tổng",
        "keyCompounds": [
          {
            "formula": "CaC₂O₄",
            "name": "Sỏi thận"
          },
          {
            "formula": "K₂C₂O₄",
            "name": ""
          }
        ]
      },
      "level2": {
        "molarMass": "88.02 g/mol",
        "subatomic": "2 C + 4 O | Điện tích -2",
        "statusBanner": "Tạo muối Canxi không tan",
        "slotA": {
          "label": "Tạo phức chelate",
          "result": "Liên kết kim loại",
          "desc": "Giữ chặt các kim loại"
        },
        "slotB": {
          "label": "Tinh thể",
          "result": "Các kim nhọn",
          "desc": "Kim nhọn sắc (Sỏi)"
        }
      },
      "level3": {
        "config": "Phẳng (Xoắn trong dung dịch)",
        "oxidation": "C là +3",
        "ionicRadius": "Ion phẳng lớn",
        "hydrationEnthalpy": "Cao",
        "coordination": "Hai đơn vị tam giác phẳng"
      },
      "level4": {
        "discoveryYear": "1776",
        "discoveredBy": "Carl Wilhelm Scheele",
        "namedBy": "Latin Oxalis (cây me chua)",
        "stse": [
          "Sức khỏe (Sỏi thận)",
          "Thực vật học (Độc tính cây đại hoàng)."
        ],
        "commonUses": [
          "Chất tẩy gỉ",
          "Tẩy trắng gỗ."
        ],
        "hazards": [
          "Độc (Liên kết Canxi trong máu)."
        ]
      }
    }
  },
  "no3_minus": {
    "name": "Nitrat",
    "customData": {
      "level1": {
        "type": "Oxyanion",
        "source": "Axit nitric (HNO₃) - Mất 1 H⁺",
        "phase": "Dung dịch nước (aq) - Không màu",
        "valence": "24 tổng (Cộng hưởng)",
        "keyCompounds": [
          {
            "formula": "KNO₃",
            "name": "Thuốc súng"
          },
          {
            "formula": "AgNO₃",
            "name": "Thử nghiệm"
          }
        ]
      },
      "level2": {
        "molarMass": "62.00 g/mol",
        "subatomic": "1 N + 3 O | Điện tích -1",
        "statusBanner": "Luôn tan (Ion vượt qua tất cả)",
        "slotA": {
          "label": "Độ tan",
          "result": "Vượt qua tất cả",
          "desc": "Không bao giờ kết tủa"
        },
        "slotB": {
          "label": "Chất nổ",
          "result": "Chất oxy hóa",
          "desc": "Oxy hóa thuốc súng"
        }
      },
      "level3": {
        "config": "Tam giác phẳng (sp²)",
        "oxidation": "N là +5",
        "ionicRadius": "179 pm",
        "hydrationEnthalpy": "-314 kJ/mol",
        "coordination": "Tam giác phẳng (120°)"
      },
      "level4": {
        "discoveryYear": "Thế kỷ 9",
        "discoveredBy": "Chinese Alchemists",
        "namedBy": "Nitre (Saltpeter)",
        "stse": [
          "Phú dưỡng (Tảo)",
          "Chu trình Nitơ",
          "An toàn thuốc nổ."
        ],
        "commonUses": [
          "Phân bón",
          "Thuốc súng",
          "Bảo quản thịt."
        ],
        "hazards": [
          "Dòng chảy gây ô nhiễm nguồn nước",
          "Chất oxy hóa mạnh."
        ]
      }
    }
  },
  "no2_minus": {
    "name": "Nitrit",
    "customData": {
      "level1": {
        "type": "Oxyanion",
        "source": "Axit nitrous (HNO₂) - Mất 1 H⁺",
        "phase": "Dung dịch nước (aq) - Vàng nhạt",
        "valence": "18 tổng (Cặp electron đơn)",
        "keyCompounds": [
          {
            "formula": "NaNO₂",
            "name": "Chất bảo quản"
          },
          {
            "formula": "KNO₂",
            "name": ""
          }
        ]
      },
      "level2": {
        "molarMass": "46.01 g/mol",
        "subatomic": "1 N + 2 O | Điện tích -1",
        "statusBanner": "Độc ở nồng độ cao",
        "slotA": {
          "label": "Bảo quản",
          "result": "Kháng khuẩn",
          "desc": "Giữ màu đỏ cho thịt"
        },
        "slotB": {
          "label": "Hình dạng cong",
          "result": "Cặp electron đơn",
          "desc": "Lực đẩy cặp electron"
        }
      },
      "level3": {
        "config": "Cong (sp²)",
        "oxidation": "N là +3",
        "ionicRadius": "192 pm",
        "hydrationEnthalpy": "-410 kJ/mol",
        "coordination": "Cong (<120°)"
      },
      "level4": {
        "discoveryYear": "Thời công nghiệp",
        "discoveredBy": "",
        "namedBy": "Greek Nitron",
        "stse": [
          "An toàn thực phẩm (Botulism vs Ung thư)",
          "Hội chứng em bé xanh."
        ],
        "commonUses": [
          "Chất bảo quản thịt muối",
          "Thuốc nhuộm."
        ],
        "hazards": [
          "Độc (Cản trở vận chuyển oxy)."
        ]
      }
    }
  },
  "so4_2minus": {
    "name": "Sunfat",
    "customData": {
      "level1": {
        "type": "Oxyanion",
        "source": "Axit sunfuric (H₂SO₄) - Mất 2 H⁺",
        "phase": "Dung dịch nước (aq) - Không màu",
        "valence": "32 tổng",
        "keyCompounds": [
          {
            "formula": "H₂SO₄",
            "name": "Axit bình ắc-quy"
          },
          {
            "formula": "CaSO₄⋅2H₂O",
            "name": "Thạch cao"
          }
        ]
      },
      "level2": {
        "molarMass": "96.06 g/mol",
        "subatomic": "1 S + 4 O | Điện tích -2",
        "statusBanner": "Không tan với Barium/Chì",
        "slotA": {
          "label": "Kết tủa",
          "result": "BaSO₄",
          "desc": "Trắng đặc với Ba²⁺"
        },
        "slotB": {
          "label": "Điện năng",
          "result": "Chất điện ly",
          "desc": "Ắc-quy chì-axit"
        }
      },
      "level3": {
        "config": "Tứ diện (sp³)",
        "oxidation": "S là +6",
        "ionicRadius": "242 pm",
        "hydrationEnthalpy": "-1059 kJ/mol",
        "coordination": "Tứ diện (109.5°)"
      },
      "level4": {
        "discoveryYear": "Thế kỷ 8",
        "discoveredBy": "Jabir ibn Hayyan",
        "namedBy": "Vitriol (Tinh thể)",
        "stse": [
          "Mưa axit (gây hại rừng)",
          "Tái chế pin."
        ],
        "commonUses": [
          "Ắc-quy xe hơi",
          "Thạch cao Paris",
          "Phèn chua."
        ],
        "hazards": [
          "Tiền chất mưa axit."
        ]
      }
    }
  },
  "so3_2minus": {
    "name": "Sunfit",
    "customData": {
      "level1": {
        "type": "Oxyanion",
        "source": "Axit sulfurous (H₂SO₃)",
        "phase": "Dung dịch nước (aq) - Không màu",
        "valence": "26 tổng (Cặp electron đơn)",
        "keyCompounds": [
          {
            "formula": "Na₂SO₃",
            "name": "Chất bảo quản"
          },
          {
            "formula": "MgSO₃",
            "name": ""
          }
        ]
      },
      "level2": {
        "molarMass": "80.06 g/mol",
        "subatomic": "1 S + 3 O | Điện tích -2",
        "statusBanner": "Chất khử / Tẩy trắng",
        "slotA": {
          "label": "Tẩy trắng",
          "result": "Khử mùi",
          "desc": "Tẩy trắng giấy"
        },
        "slotB": {
          "label": "Mùi hăng",
          "result": "Khí SO₂",
          "desc": "Mùi hôi thối (Axit hóa)"
        }
      },
      "level3": {
        "config": "Tháp tam giác (sp³)",
        "oxidation": "S là +4",
        "ionicRadius": "Lớn",
        "hydrationEnthalpy": "-1300 kJ/mol",
        "coordination": "Tháp tam giác (<109.5°)"
      },
      "level4": {
        "discoveryYear": "Thời cổ đại",
        "discoveredBy": "(Đốt lưu huỳnh)",
        "namedBy": "Sulfur",
        "stse": [
          "Dị ứng rượu vang (Sunfit)",
          "Nguồn gốc mưa axit."
        ],
        "commonUses": [
          "Bảo quản rượu vang",
          "Tẩy trắng giấy."
        ],
        "hazards": [
          "Gây hen suyễn",
          "Giải phóng khí độc."
        ]
      }
    }
  },
  "po4_3minus": {
    "name": "Photphat",
    "customData": {
      "level1": {
        "type": "Oxyanion",
        "source": "Axit photphoric (H₃PO₄) - Mất 3 H⁺",
        "phase": "Chất rắn (Xương) / Dung dịch nước",
        "valence": "32 tổng",
        "keyCompounds": [
          {
            "formula": "Ca₃(PO₄)₂",
            "name": "Xương"
          },
          {
            "formula": "ATP",
            "name": "Năng lượng"
          }
        ]
      },
      "level2": {
        "molarMass": "94.97 g/mol",
        "subatomic": "1 P + 4 O | Điện tích -3",
        "statusBanner": "Không tan trừ nhóm 1",
        "slotA": {
          "label": "Kết tủa",
          "result": "Màu vàng",
          "desc": "Vàng với Bạc (Ag₃PO₄)"
        },
        "slotB": {
          "label": "Sự sống",
          "result": "Xương sống",
          "desc": "Xương sống DNA"
        }
      },
      "level3": {
        "config": "Tứ diện (sp³)",
        "oxidation": "P là +5",
        "ionicRadius": "238 pm",
        "hydrationEnthalpy": "-2765 kJ/mol",
        "coordination": "Tứ diện (109.5°)"
      },
      "level4": {
        "discoveryYear": "1669",
        "discoveredBy": "Hennig Brand",
        "namedBy": "Greek Phosphoros (Ánh sáng)",
        "stse": [
          "Phú dưỡng (Tảo nở hoa)",
          "Thiếu hụt Phosphorus."
        ],
        "commonUses": [
          "Phân bón",
          "Cola (Chất axit hóa)",
          "Chất tẩy rửa."
        ],
        "hazards": [
          "Ô nhiễm nước (Tảo)."
        ]
      }
    }
  },
  "clo3_minus": {
    "name": "Clorat",
    "customData": {
      "level1": {
        "type": "Oxyanion Halogen",
        "source": "Axit cloric (HClO₃)",
        "phase": "Dung dịch nước (aq) - Không màu",
        "valence": "26 tổng",
        "keyCompounds": [
          {
            "formula": "KClO₃",
            "name": "Pháo hoa"
          },
          {
            "formula": "NaClO₃",
            "name": ""
          }
        ]
      },
      "level2": {
        "molarMass": "83.45 g/mol",
        "subatomic": "1 Cl + 3 O | Điện tích -1",
        "statusBanner": "Chất oxy hóa mạnh",
        "slotA": {
          "label": "Nổ",
          "result": "Chất oxy hóa",
          "desc": "Chất oxy hóa cho màu sắc"
        },
        "slotB": {
          "label": "Thuốc diệt cỏ",
          "result": "Làm rụng lá",
          "desc": "Diệt cỏ dại"
        }
      },
      "level3": {
        "config": "Tháp tam giác (sp³)",
        "oxidation": "Cl là +5",
        "ionicRadius": "171 pm",
        "hydrationEnthalpy": "Thấp",
        "coordination": "Tháp tam giác (<109.5°)"
      },
      "level4": {
        "discoveryYear": "1786",
        "discoveredBy": "Claude Louis Berthollet",
        "namedBy": "Chlorine",
        "stse": [
          "An toàn (Ổn định của pháo hoa)",
          "Nông nghiệp (Kiểm soát cỏ dại)."
        ],
        "commonUses": [
          "Pháo hoa",
          "Nến oxy (Tàu ngầm)."
        ],
        "hazards": [
          "Nguy cơ cháy/Nổ với các chất hữu cơ."
        ]
      }
    }
  },
  "clo_minus": {
    "name": "Hypoclorit",
    "customData": {
      "level1": {
        "type": "Oxyanion Halogen",
        "source": "Thuốc tẩy (OCl⁻)",
        "phase": "Dung dịch nước (aq) - Vàng nhạt",
        "valence": "14 tổng",
        "keyCompounds": [
          {
            "formula": "NaClO",
            "name": "Thuốc tẩy/Javex"
          },
          {
            "formula": "Ca(ClO)₂",
            "name": ""
          }
        ]
      },
      "level2": {
        "molarMass": "51.45 g/mol",
        "subatomic": "1 Cl + 1 O | Điện tích -1",
        "statusBanner": "Chất tẩy trắng",
        "slotA": {
          "label": "Tẩy trắng",
          "result": "Oxy hóa",
          "desc": "Tẩy vết bẩn"
        },
        "slotB": {
          "label": "Khử trùng",
          "result": "Tiệt trùng",
          "desc": "Diệt vi khuẩn"
        }
      },
      "level3": {
        "config": "Thẳng",
        "oxidation": "Cl là +1",
        "ionicRadius": "150 pm",
        "hydrationEnthalpy": "-350 kJ/mol",
        "coordination": "Thẳng"
      },
      "level4": {
        "discoveryYear": "1789",
        "discoveredBy": "Berthollet (Javel Water)",
        "namedBy": "Greek Hypo (Dưới)",
        "stse": [
          "Y tế công cộng (Clo hóa nước)",
          "Vệ sinh."
        ],
        "commonUses": [
          "Thuốc tẩy gia dụng",
          "Vệ sinh hồ bơi."
        ],
        "hazards": [
          "Khí độc (Cl₂) khi trộn với axit/amoniac."
        ]
      }
    }
  },
  "clo4_minus": {
    "name": "Perclorat",
    "customData": {
      "level1": {
        "type": "Oxyanion Halogen",
        "source": "Axit perchloric",
        "phase": "Chất rắn (Muối)",
        "valence": "32 tổng",
        "keyCompounds": [
          {
            "formula": "NH₄ClO₄",
            "name": "Nhiên liệu tên lửa"
          },
          {
            "formula": "KClO₄",
            "name": ""
          }
        ]
      },
      "level2": {
        "molarMass": "99.45 g/mol",
        "subatomic": "1 Cl + 4 O | Điện tích -1",
        "statusBanner": "Chất oxy hóa nhiên liệu tên lửa",
        "slotA": {
          "label": "Phóng",
          "result": "Chất đẩy",
          "desc": "Nhiên liệu tăng cường rắn"
        },
        "slotB": {
          "label": "Đất sao Hỏa",
          "result": "Đất Sao Hỏa",
          "desc": "Tìm thấy trên Sao Hỏa"
        }
      },
      "level3": {
        "config": "Tứ diện (sp³)",
        "oxidation": "Cl là +7 (Tối đa)",
        "ionicRadius": "240 pm",
        "hydrationEnthalpy": "Thấp",
        "coordination": "Tứ diện (109.5°)"
      },
      "level4": {
        "discoveryYear": "1816",
        "discoveredBy": "Friedrich von Stadion",
        "namedBy": "Greek Hyper (Trên)",
        "stse": [
          "Thám hiểm không gian",
          "Ô nhiễm nước ngầm",
          "Sức khỏe tuyến giáp."
        ],
        "commonUses": [
          "Chất đẩy tên lửa",
          "Bơm túi khí."
        ],
        "hazards": [
          "Nguy cơ nổ",
          "Độc hại tuyến giáp."
        ]
      }
    }
  },
  "cu_plus": {
    "name": "Đồng(I)",
    "customData": {
      "level1": {
        "type": "Cation Kim loại chuyển tiếp",
        "source": "Nguyên tố nhóm 11 - Mất 1 e⁻",
        "phase": "Dung dịch nước (Không bền) / Chất rắn",
        "valence": "18 (Khí hiếm giả)",
        "keyCompounds": [
          {
            "formula": "Cu₂O",
            "name": "Đỏ"
          },
          {
            "formula": "CuCl",
            "name": "Trắng"
          }
        ]
      },
      "level2": {
        "molarMass": "63.55 g/mol",
        "subatomic": "29 p⁺ | 28 e⁻",
        "statusBanner": "Axit Lewis mềm",
        "slotA": {
          "label": "Không màu",
          "result": "Trong suốt",
          "desc": "Trong suốt trong nước tinh khiết"
        },
        "slotB": {
          "label": "Phân ly",
          "result": "Không bền",
          "desc": "2Cu⁺ ➔ Cu²⁺ + Cu"
        }
      },
      "level3": {
        "config": "[Ar] 3d¹⁰ (Vỏ d đầy)",
        "oxidation": "+1",
        "ionicRadius": "77 pm (Lớn so với điện tích)",
        "hydrationEnthalpy": "-593 kJ/mol",
        "coordination": "2 (Thẳng)"
      },
      "level4": {
        "discoveryYear": "Thời tiền sử",
        "discoveredBy": "Không rõ",
        "namedBy": "Latin Cuprum (từ Cyprus)",
        "stse": [
          "Luyện kim cổ đại",
          "Truyền electron sinh học."
        ],
        "commonUses": [
          "Xúc tác",
          "Quy trình nhuộm",
          "Thuốc trừ sâu (Cu₂O)."
        ],
        "hazards": [
          "Độc với sinh vật nước."
        ]
      }
    }
  },
  "cu_2plus": {
    "name": "Đồng(II)",
    "customData": {
      "level1": {
        "type": "Cation Kim loại chuyển tiếp",
        "source": "Nguyên tố nhóm 11 - Mất 2 e⁻",
        "phase": "Dung dịch nước (aq) - Xanh sáng",
        "valence": "17 tổng (d⁹)",
        "keyCompounds": [
          {
            "formula": "CuSO₄",
            "name": "Vitriol xanh"
          },
          {
            "formula": "CuCO₃",
            "name": "Verdigris"
          }
        ]
      },
      "level2": {
        "molarMass": "63.55 g/mol",
        "subatomic": "29 p⁺ | 27 e⁻",
        "statusBanner": "Thuận từ (Màu xanh)",
        "slotA": {
          "label": "Màu sắc",
          "result": "Xanh sáng",
          "desc": "Dung dịch xanh cyan/xanh lam"
        },
        "slotB": {
          "label": "Thử ngọn lửa",
          "result": "Xanh lá-xanh lam",
          "desc": "Ngọn lửa xanh lá-xanh lam"
        }
      },
      "level3": {
        "config": "[Ar] 3d⁹",
        "oxidation": "+2 (Bền nhất)",
        "ionicRadius": "73 pm",
        "hydrationEnthalpy": "-2100 kJ/mol (Rất cao)",
        "coordination": "6 (Bát diện Jahn-Teller)"
      },
      "level4": {
        "discoveryYear": "Thời tiền sử",
        "discoveredBy": "Không rõ",
        "namedBy": "Latin Cuprum",
        "stse": [
          "Điện tử (Khắc PCB)",
          "Hỗn hợp Bordeaux (Thuốc diệt nấm)."
        ],
        "commonUses": [
          "Mạ điện",
          "Sắc tố",
          "Bảo quản gỗ."
        ],
        "hazards": [
          "Ăn mòn",
          "Nguy hiểm nếu nuốt phải."
        ]
      }
    }
  },
  "fe_2plus": {
    "name": "Sắt(II)",
    "customData": {
      "level1": {
        "type": "Cation Kim loại chuyển tiếp",
        "source": "Nguyên tố nhóm 8 - Mất 2 e⁻",
        "phase": "Dung dịch nước (aq) - Xanh nhạt",
        "valence": "18 tổng (d⁶)",
        "keyCompounds": [
          {
            "formula": "FeSO₄",
            "name": "Vitriol xanh lá"
          },
          {
            "formula": "FeCl₂",
            "name": ""
          }
        ]
      },
      "level2": {
        "molarMass": "55.85 g/mol",
        "subatomic": "26 p⁺ | 24 e⁻",
        "statusBanner": "Vận chuyển Oxy trong máu",
        "slotA": {
          "label": "Hemoglobin",
          "result": "Liên kết O₂",
          "desc": "Liên kết Oxy ở phổi"
        },
        "slotB": {
          "label": "Kết tủa",
          "result": "Xanh bẩn",
          "desc": "Xanh bẩn với OH⁻"
        }
      },
      "level3": {
        "config": "[Ar] 3d⁶",
        "oxidation": "+2 (Ferrous)",
        "ionicRadius": "78 pm (Spin cao)",
        "hydrationEnthalpy": "-1920 kJ/mol",
        "coordination": "6 (Bát diện)"
      },
      "level4": {
        "discoveryYear": "Thời tiền sử",
        "discoveredBy": "Various Cultures",
        "namedBy": "Latin Ferrum",
        "stse": [
          "Thiếu máu thiếu sắt",
          "Phản ứng oxy hóa-khử sinh học."
        ],
        "commonUses": [
          "Bổ sung dinh dưỡng",
          "Xử lý nước."
        ],
        "hazards": [
          "Liều cao sắt cực độc."
        ]
      }
    }
  },
  "fe_3plus": {
    "name": "Sắt(III)",
    "customData": {
      "level1": {
        "type": "Cation Kim loại chuyển tiếp",
        "source": "Nguyên tố nhóm 8 - Mất 3 e⁻",
        "phase": "Dung dịch nước (aq) - Vàng/Nâu",
        "valence": "17 tổng (d⁵)",
        "keyCompounds": [
          {
            "formula": "FeCl₃",
            "name": "Chất ăn mòn"
          },
          {
            "formula": "Fe₂O₃",
            "name": "Gỉ sét"
          }
        ]
      },
      "level2": {
        "molarMass": "55.85 g/mol",
        "subatomic": "26 p⁺ | 23 e⁻",
        "statusBanner": "Mật độ điện tích cực cao",
        "slotA": {
          "label": "Gỉ sét",
          "result": "Oxy hóa",
          "desc": "Bề mặt sắt gỉ"
        },
        "slotB": {
          "label": "Kết tủa",
          "result": "Đỏ nâu",
          "desc": "Gel đỏ nâu với OH⁻"
        }
      },
      "level3": {
        "config": "[Ar] 3d⁵ (Độ bền nửa đầy)",
        "oxidation": "+3 (Ferric)",
        "ionicRadius": "64.5 pm (Rất nhỏ)",
        "hydrationEnthalpy": "-4430 kJ/mol (Cực cao)",
        "coordination": "6 (Bát diện)"
      },
      "level4": {
        "discoveryYear": "Thời tiền sử",
        "discoveredBy": "Various Cultures",
        "namedBy": "Latin Ferrum",
        "stse": [
          "Nước thải mỏ axit (Sông màu cam)",
          "Ăn mòn."
        ],
        "commonUses": [
          "Xử lý nước thải (Chất keo tụ)",
          "Sản xuất mực."
        ],
        "hazards": [
          "Ăn mòn",
          "Gây ố màu."
        ]
      }
    }
  },
  "pb_2plus": {
    "name": "Chì(II)",
    "customData": {
      "level1": {
        "type": "Cation hậu chuyển tiếp",
        "source": "Nguyên tố nhóm 14 - Mất cặp 6s² bên ngoài",
        "phase": "Dung dịch nước (aq) - Không màu",
        "valence": "2 (Cặp 6s² bền)",
        "keyCompounds": [
          {
            "formula": "PbI₂",
            "name": "Kết tủa vàng"
          },
          {
            "formula": "PbSO₄",
            "name": "Ắc-quy rắn"
          }
        ]
      },
      "level2": {
        "molarMass": "207.2 g/mol",
        "subatomic": "82 p⁺ | 80 e⁻",
        "statusBanner": "Độc kim loại nặng",
        "slotA": {
          "label": "Kết tủa",
          "result": "Mưa vàng",
          "desc": "Mưa vàng với Iodide"
        },
        "slotB": {
          "label": "Lưu trữ",
          "result": "Ắc-quy",
          "desc": "Bình ắc-quy chì-axit"
        }
      },
      "level3": {
        "config": "[Xe] 4f¹⁴ 5d¹⁰ 6s²",
        "oxidation": "+2 (Bền nhất với Chì)",
        "ionicRadius": "119 pm (Lớn)",
        "hydrationEnthalpy": "-1481 kJ/mol",
        "coordination": "6-12 (Linh hoạt)"
      },
      "level4": {
        "discoveryYear": "Thời cổ đại (7000 TCN)",
        "discoveredBy": "Không rõ",
        "namedBy": "Latin Plumbum",
        "stse": [
          "Khủng hoảng nước Flint",
          "Lịch sử xăng có chì."
        ],
        "commonUses": [
          "Ắc-quy xe hơi",
          "Chắn bức xạ."
        ],
        "hazards": [
          "Độc thần kinh (Tổn thương não)",
          "Tích lũy sinh học."
        ]
      }
    }
  },
  "mno4_minus": {
    "name": "Permanganat",
    "customData": {
      "level1": {
        "type": "Oxyanion Kim loại chuyển tiếp",
        "source": "Mangan ở trạng thái +7",
        "phase": "Dung dịch nước (aq) - Tím đậm",
        "valence": "31 tổng (Cộng hưởng)",
        "keyCompounds": [
          {
            "formula": "KMnO₄",
            "name": "Tinh thể Condy"
          }
        ]
      },
      "level2": {
        "molarMass": "118.94 g/mol",
        "subatomic": "1 Mn + 4 O | -1",
        "statusBanner": "Chất oxy hóa tối thượng",
        "slotA": {
          "label": "Tím đậm",
          "result": "Mãnh liệt",
          "desc": "Màu đậm dù chỉ 1ppm"
        },
        "slotB": {
          "label": "Chất oxy hóa",
          "result": "Phản ứng",
          "desc": "Tức thì bốc cháy với Glycerin"
        }
      },
      "level3": {
        "config": "Tứ diện (Phức d⁰)",
        "oxidation": "Mn là +7 (Tối đa)",
        "ionicRadius": "240 pm",
        "hydrationEnthalpy": "Cao",
        "coordination": "Tứ diện (109.5°)"
      },
      "level4": {
        "discoveryYear": "1774 (Nguyên tố)",
        "discoveredBy": "Scheele / Gahn",
        "namedBy": "Latin Magnes (Nam châm)",
        "stse": [
          "Làm sạch nước (Loại bỏ chất hữu cơ)",
          "Chất khử trùng."
        ],
        "commonUses": [
          "Chuẩn độ phòng thí nghiệm",
          "Chất khử trùng",
          "Bảo quản trái cây."
        ],
        "hazards": [
          "Chất oxy hóa mạnh",
          "Để lại vết nâu trên da (MnO₂)."
        ]
      }
    }
  },
  "cro4_2minus": {
    "name": "Cromat",
    "customData": {
      "level1": {
        "type": "Oxyanion Kim loại chuyển tiếp",
        "source": "Crom ở trạng thái +6",
        "phase": "Dung dịch nước (aq) - Vàng sáng",
        "valence": "32 tổng",
        "keyCompounds": [
          {
            "formula": "K₂CrO₄",
            "name": ""
          },
          {
            "formula": "PbCrO₄",
            "name": "Chrome Yellow"
          }
        ]
      },
      "level2": {
        "molarMass": "116.00 g/mol",
        "subatomic": "1 Cr + 4 O | -2",
        "statusBanner": "Gây ung thư / Sắc tố vàng",
        "slotA": {
          "label": "Sắc tố",
          "result": "Màu vàng",
          "desc": "Chrome Yellow cổ điển"
        },
        "slotB": {
          "label": "Nhạy pH",
          "result": "Cân bằng",
          "desc": "Chuyển cam trong axit"
        }
      },
      "level3": {
        "config": "Tứ diện",
        "oxidation": "Cr là +6",
        "ionicRadius": "242 pm",
        "hydrationEnthalpy": "-1000 kJ/mol",
        "coordination": "Tứ diện (109.5°)"
      },
      "level4": {
        "discoveryYear": "1797",
        "discoveredBy": "Louis Nicolas Vauquelin",
        "namedBy": "Greek Chroma (Màu sắc)",
        "stse": [
          "Ô nhiễm đất",
          "Chất thải mạ crom."
        ],
        "commonUses": [
          "Chất ức chế ăn mòn",
          "Sắc tố/Mực vàng."
        ],
        "hazards": [
          "Gây ung thư (Crom hexavalent)."
        ]
      }
    }
  },
  "cr2o7_2minus": {
    "name": "Dicromat",
    "customData": {
      "level1": {
        "type": "Oxyanion Kim loại chuyển tiếp",
        "source": "Hai đơn vị Cromat (Môi trường axit)",
        "phase": "Dung dịch nước (aq) - Cam sáng",
        "valence": "52 tổng",
        "keyCompounds": [
          {
            "formula": "K₂Cr₂O₇",
            "name": ""
          },
          {
            "formula": "(NH₄)₂Cr₂O₇",
            "name": "Núi lửa"
          }
        ]
      },
      "level2": {
        "molarMass": "216.00 g/mol",
        "subatomic": "2 Cr + 7 O | -2",
        "statusBanner": "Chất oxy hóa phòng thí nghiệm xuất sắc",
        "slotA": {
          "label": "Nhiệt",
          "result": "Núi lửa",
          "desc": "\"Tro\" Cr₂O₃ xanh"
        },
        "slotB": {
          "label": "Chuẩn độ",
          "result": "Redox",
          "desc": "Cam-thành-xanh cổ điển"
        }
      },
      "level3": {
        "config": "Hai tứ diện chia sẻ góc",
        "oxidation": "Cr là +6",
        "ionicRadius": "Ion dimer lớn",
        "hydrationEnthalpy": "Cao",
        "coordination": "Cầu nối Cr-O-Cr (126°)"
      },
      "level4": {
        "discoveryYear": "1797",
        "discoveredBy": "Vauquelin",
        "namedBy": "Greek Di (Hai) + Chroma",
        "stse": [
          "Thử nghiệm Breathalyzer (Lịch sử)",
          "Thuộc da."
        ],
        "commonUses": [
          "Làm sạch dụng cụ thủy tinh",
          "Khắc ảnh."
        ],
        "hazards": [
          "Cực độc",
          "Gây ung thư",
          "Chất oxy hóa."
        ]
      }
    }
  },
  "nh4_plus": {
    "name": "Amoni",
    "customData": {
      "level1": {
        "type": "Cation đa nguyên tử",
        "source": "Amoniac - Nhận 1 H⁺",
        "phase": "Dung dịch nước (aq) - Không màu",
        "valence": "8 (Bát tử bền)",
        "keyCompounds": [
          {
            "formula": "NH₄NO₃",
            "name": "Phân bón"
          },
          {
            "formula": "NH₄Cl",
            "name": "Sal Ammoniac"
          }
        ]
      },
      "level2": {
        "molarMass": "18.04 g/mol",
        "subatomic": "1 N + 4 H | Điện tích +1",
        "statusBanner": "Luôn tan (Ion vượt qua tất cả)",
        "slotA": {
          "label": "Mùi",
          "result": "Giải phóng Amoniac với Bazơ",
          "desc": "Kiểm tra NaOH"
        },
        "slotB": {
          "label": "Sinh trưởng",
          "result": "Nguồn Nitơ",
          "desc": "Phân bón"
        }
      },
      "level3": {
        "config": "Tứ diện",
        "oxidation": "N là -3",
        "ionicRadius": "143 pm (Tương tự K⁺)",
        "hydrationEnthalpy": "-307 kJ/mol",
        "coordination": "Tứ diện (109.5°)"
      },
      "level4": {
        "discoveryYear": "Thời cổ đại",
        "discoveredBy": "Nhiều nguồn",
        "namedBy": "From Temple of Ammon",
        "stse": [
          "An ninh lương thực toàn cầu (Phân bón)",
          "Chu trình Nitơ."
        ],
        "commonUses": [
          "Phân bón",
          "Muối ngửi",
          "Thuốc nổ."
        ],
        "hazards": [
          "Giải phóng khí amoniac độc."
        ]
      }
    }
  },
  "oh_minus": {
    "name": "Hydroxide",
    "customData": {
      "level1": {
        "type": "Anion đa nguyên tử / Bazơ",
        "source": "Nước / Các Bazơ - Mất H⁺",
        "phase": "Dung dịch nước (aq) - Không màu",
        "valence": "8 (Bát tử bền)",
        "keyCompounds": [
          {
            "formula": "NaOH",
            "name": "Lye"
          },
          {
            "formula": "Ca(OH)₂",
            "name": "Nước vôi"
          }
        ]
      },
      "level2": {
        "molarMass": "17.01 g/mol",
        "subatomic": "1 O + 1 H | Điện tích -1",
        "statusBanner": "Định nghĩa tính bazơ (pOH)",
        "slotA": {
          "label": "Thử giấy quỳ",
          "result": "Giấy quỳ đỏ chuyển xanh",
          "desc": "pH > 7"
        },
        "slotB": {
          "label": "Trơn",
          "result": "Xà phòng hóa dầu mỡ trên da",
          "desc": "Cảm giác như xà phòng"
        }
      },
      "level3": {
        "config": "Thẳng",
        "oxidation": "O là -2",
        "ionicRadius": "137 pm",
        "hydrationEnthalpy": "-460 kJ/mol",
        "coordination": "Thẳng (180°)"
      },
      "level4": {
        "discoveryYear": "Thời cổ đại (làm xà phòng)",
        "discoveredBy": "Nhiều nguồn",
        "namedBy": "Greek Hydro + Oxys",
        "stse": [
          "Sản xuất xà phòng (Xà phòng hóa)",
          "Trung hòa axit."
        ],
        "commonUses": [
          "Thông cống",
          "Xà phòng",
          "Thuốc kháng axit."
        ],
        "hazards": [
          "**Ăn mòn** (Bỏng kiềm)",
          "Nguy cơ mù mắt."
        ]
      }
    }
  },
  "hco3_minus": {
    "name": "Bicarbonate",
    "customData": {
      "level1": {
        "type": "Oxyanion lưỡng tính",
        "source": "Axit carbonic - Mất 1 H⁺",
        "phase": "Chất rắn (Trắng) / Dung dịch nước",
        "valence": "24 tổng",
        "keyCompounds": [
          {
            "formula": "NaHCO₃",
            "name": "Baking Soda"
          },
          {
            "formula": "KHCO₃",
            "name": ""
          }
        ]
      },
      "level2": {
        "molarMass": "61.02 g/mol",
        "subatomic": "1 C + 3 O + 1 H | Điện tích -1",
        "statusBanner": "Lưỡng tính (Chất đệm máu)",
        "slotA": {
          "label": "Chất đệm",
          "result": "Kháng thay đổi pH",
          "desc": "pH máu 7.4"
        },
        "slotB": {
          "label": "Sủi bọt",
          "result": "Giải phóng CO₂ với Axit",
          "desc": "Baking Soda"
        }
      },
      "level3": {
        "config": "Tam giác phẳng",
        "oxidation": "C là +4",
        "ionicRadius": "156 pm",
        "hydrationEnthalpy": "-380 kJ/mol",
        "coordination": "Tam giác phẳng (tại C)"
      },
      "level4": {
        "discoveryYear": "1801",
        "discoveredBy": "Valentin Rose",
        "namedBy": "Tiền tố Bi- (Carbonate kép)",
        "stse": [
          "Chất đệm pH máu (Cân bằng nội môi)",
          "Bể chứa Carbon đại dương."
        ],
        "commonUses": [
          "Nấu ăn (Chất nở)",
          "Thuốc kháng axit",
          "Bình chữa cháy."
        ],
        "hazards": [
          "An toàn (Thiết yếu cho sự sống)."
        ]
      }
    }
  },
  "hso4_minus": {
    "name": "Bisunfat",
    "customData": {
      "level1": {
        "type": "Oxyanion axit",
        "source": "Axit sunfuric - Mất 1 H⁺",
        "phase": "Chất rắn (Trắng) / Dung dịch nước",
        "valence": "32 tổng",
        "keyCompounds": [
          {
            "formula": "NaHSO₄",
            "name": "Chất tẩy toilet"
          }
        ]
      },
      "level2": {
        "molarMass": "97.07 g/mol",
        "subatomic": "1 S + 4 O + 1 H | Điện tích -1",
        "statusBanner": "Muối axit mạnh",
        "slotA": {
          "label": "Tính axit",
          "result": "Giấy quỳ xanh chuyển đỏ",
          "desc": "pH < 1"
        },
        "slotB": {
          "label": "Làm sạch",
          "result": "Hòa tan cặn bẩn",
          "desc": "Chất tẩy toilet"
        }
      },
      "level3": {
        "config": "Tứ diện",
        "oxidation": "S là +6",
        "ionicRadius": "Lớn",
        "hydrationEnthalpy": "Cao",
        "coordination": "Tứ diện (109.5°)"
      },
      "level4": {
        "discoveryYear": "Thời công nghiệp",
        "discoveredBy": "Nhiều nguồn",
        "namedBy": "Từ Axit sunfuric",
        "stse": [
          "Kiểm soát pH công nghiệp",
          "An toàn chất tẩy rửa."
        ],
        "commonUses": [
          "Chất tẩy bồn cầu",
          "Giảm pH hồ bơi."
        ],
        "hazards": [
          "Ăn mòn (phá hủy mô)."
        ]
      }
    }
  },
  "h2po4_minus": {
    "name": "Dihydrogen phosphate",
    "customData": {
      "level1": {
        "type": "Oxyanion axit",
        "source": "Axit photphoric - Mất 1 H⁺",
        "phase": "Chất rắn / Dung dịch nước",
        "valence": "32 tổng",
        "keyCompounds": [
          {
            "formula": "Ca(H₂PO₄)₂",
            "name": "Superphosphate"
          }
        ]
      },
      "level2": {
        "molarMass": "96.99 g/mol",
        "subatomic": "1 P + 4 O + 2 H | Điện tích -1",
        "statusBanner": "Phân bón tan được",
        "slotA": {
          "label": "Rễ cây",
          "result": "Thúc đẩy sinh trưởng rễ",
          "desc": "Phân bón N-P-K"
        },
        "slotB": {
          "label": "Độ tan",
          "result": "Tan trong Canxi",
          "desc": "Superphosphate"
        }
      },
      "level3": {
        "config": "Tứ diện",
        "oxidation": "P là +5",
        "ionicRadius": "Lớn",
        "hydrationEnthalpy": "Cao",
        "coordination": "Tứ diện (109.5°)"
      },
      "level4": {
        "discoveryYear": "1840s",
        "discoveredBy": "Lawes",
        "namedBy": "Từ Phosphate",
        "stse": [
          "Cách mạng xanh (Phân bón)",
          "Phú dưỡng."
        ],
        "commonUses": [
          "Phân bón Superphosphate",
          "Baking Powder",
          "Chất đệm."
        ],
        "hazards": [
          "Kích thích mắt",
          "Ô nhiễm nước."
        ]
      }
    }
  },
  "ch3coo_minus": {
    "name": "Axetat",
    "customData": {
      "level1": {
        "type": "Anion hữu cơ",
        "source": "Giấm (CH₃COOH) - Mất 1 H⁺",
        "phase": "Dung dịch nước (aq) - Không màu",
        "valence": "24 tổng",
        "keyCompounds": [
          {
            "formula": "CH₃COONa",
            "name": "Túi sưởi ấm"
          },
          {
            "formula": "Vinegar",
            "name": ""
          }
        ]
      },
      "level2": {
        "molarMass": "59.04 g/mol",
        "subatomic": "2 C + 2 O + 3 H | Điện tích -1",
        "statusBanner": "Luôn tan (Ion vượt qua tất cả)",
        "slotA": {
          "label": "Giấm",
          "result": "Mùi chua (Axit)",
          "desc": "CH₃COOH"
        },
        "slotB": {
          "label": "Túi sưởi ấm",
          "result": "Kết tinh tỏa nhiệt",
          "desc": "Natri Axetat"
        }
      },
      "level3": {
        "config": "Tam giác phẳng (Carboxyl)",
        "oxidation": "C là +3 (Carboxyl)",
        "ionicRadius": "162 pm",
        "hydrationEnthalpy": "-400 kJ/mol",
        "coordination": "Tứ diện (Methyl) + Phẳng (Carboxyl)"
      },
      "level4": {
        "discoveryYear": "Thời cổ đại",
        "discoveredBy": "Nhiều nguồn",
        "namedBy": "Latin Acetum (Giấm)",
        "stse": [
          "Lên men (Công nghệ sinh học)",
          "Nhựa phân hủy sinh học."
        ],
        "commonUses": [
          "Giấm (Thực phẩm)",
          "Túi sưởi tay (Túi sưởi ấm)",
          "Vải sợi."
        ],
        "hazards": [
          "Axit đặc ăn mòn."
        ]
      }
    }
  },
  "cn_minus": {
    "name": "Xyanua",
    "customData": {
      "level1": {
        "type": "Pseudo-Halogen độc",
        "source": "Axit prussic (HCN) - Mất 1 H⁺",
        "phase": "Dung dịch nước (aq) - Không màu",
        "valence": "10 (Đẳng electron với N₂)",
        "keyCompounds": [
          {
            "formula": "NaCN",
            "name": "Khai thác vàng"
          },
          {
            "formula": "KCN",
            "name": "Chất độc"
          }
        ]
      },
      "level2": {
        "molarMass": "26.02 g/mol",
        "subatomic": "1 C + 1 N | Điện tích -1",
        "statusBanner": "Cực độc",
        "slotA": {
          "label": "Chất độc",
          "result": "Ức chế hô hấp tế bào",
          "desc": "Chặn Cytochrome"
        },
        "slotB": {
          "label": "Chiết xuất",
          "result": "Hòa tan vàng",
          "desc": "Phức Au(CN)₂⁻"
        }
      },
      "level3": {
        "config": "Thẳng",
        "oxidation": "C là +2",
        "ionicRadius": "191 pm",
        "hydrationEnthalpy": "-350 kJ/mol",
        "coordination": "Thẳng (Liên kết ba)"
      },
      "level4": {
        "discoveryYear": "1782",
        "discoveredBy": "Scheele",
        "namedBy": "Greek Kyanos (Xanh đậm)",
        "stse": [
          "Đạo đức khai thác mỏ (Sự cố tràn)",
          "Ô nhiễm môi trường."
        ],
        "commonUses": [
          "Chiết xuất vàng",
          "Mạ điện."
        ],
        "hazards": [
          "**Gây chết người** (Ức chế hô hấp)."
        ]
      }
    }
  }
};
