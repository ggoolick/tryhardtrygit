let b = 
  { "Меню": {
      "id": 1,
      "value": "Файл",
      "list": {
        "items": {
          "new_doc": {
            "value": "Новый",
            "onclick":"create_new_doc"
            },
          "open_doc": {
            "value": "Открыть...",
            "onclick": "open_doc"
            },
          "save_doc": {
            "value": "Сохранить",
            "onclick": "save_doc"
            },
          "save_as_doc": {
              "value": "Сохранить как...",
              "onclick": "save_as_doc"
            },
          "print_option": {
              "value": "Параметры печати",
              "onclick": {
                  "show_print_option": {
                    "Цвет": "Насыщенный",
                    "Черно-белая печать?": "",
                    "Размер печати": "А4"
                    }
                  }
              }
            }
          }
        }
      }

console.log(JSON.parse(`{ "Meню": {
          "id": "1",
          "value": "Фaйл",
          "list": {
            "items": {
              "new_doc": {
                "value": "Hoвый",
                "onclick": "create_new_doc"
              },
              "open_doc": {
                "value": "Oткрыть...",
                "onclick": "open_doc"
              },
              "save_doc": {
                "value": "Coxранить",
                "onclick": "save_doc"
              },
              "save_as_doc": {
                "value": "Coжранить как...",
                "onclick": "save_as_doc"
              },
              "print_option": {
                "value": "Параметры печати",
                "onclick": {
                  "show_print_option": {
                    "Цвет": "Насыщенный",
                    "Черно-белая печать?": "",
                    "Размер печати": "A4"
                  }
                }
              }
            }
          }
        }
      }` ) );


      let a = "light loh";