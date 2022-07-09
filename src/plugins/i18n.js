import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n)

// Ready translated locale messages
const messages = {
  en: {
    message: {
      introduction: {
        title: "HELLO WORLD",
        subtitle: "SOFTWARE ENGINEER",
        description: "Hello. " +
                     "I'm a backend engineer who fell in love with developing things that can help people. " +
                     "I develop web applications on both the backend and frontend. " +
                     "I'm also obsessed with clean code and database performance tuning."
      },
      experience: {
        second: {
          title: "LINE Plus",
          'title-2': "Software Engineer",
          subtitle: "(2022 ~ Current)",
          description: "I'm working on a platform to provide billing services for advertisers who use LINE ads. " +
                       "I make apps that provide services such as creating billing accounts, make payments, make invoices and settlements."
        },
        first: {
          title: "Pilot",
          subtitle: "(2015 ~ 2021)",
          description: "I've experience of 200 hours of professional flight training. " +
                       "I have commercial pilot license and private pilot license. " +
                       "Even though I'm working as a software engineer, I often reminisce on my experience of flying in the blue sky."
        },
      },
      projects: {
        onuMenu: {
          title: "Online Menu platform",
          functions: {
            title: "What can you do with this app",
            f1: "Register business information",
            f2: "Register stories",
            f3: "Register menus",
            f4: "Register recommendations",
            f5: "Create QR code to easily direct users to their business online pages"
          },
          skills: {
            title: "Used skills",
            s1: "Vue",
            s2: "Firebase"
          },
          links: {
            l1: "View registered businesses",
            l2: "Register business"
          }
        },
        notToDoList: {
          title: "Easy to use TO DO app used to record something YOU DON'T WANT TO DO !!",
          functions: {
            title: "What can you do with this app",
            f1: "CRUD boards",
            f2: "CRUD tasks",
            f3: "Drag and drop boards",
            f4: "Save board data in disk",
            f5: "Upload saved board data on app"
          },
          skills: {
            title: "Used skills",
            s1: "Vue",
            s2: "Browser APIs (local storage, drag and drop)"
          }
        }
      }
    }
  },
  ko: {
    message: {
      introduction: {
        title: "HELLO WORLD",
        subtitle: "SOFTWARE ENGINEER",
        description: "안녕하세요. 주변의 문제를 해결할 수 있는 어플리케이션 개발과 매료된 백엔드 개발자입니다. " +
                     "백엔드와 프론트엔드 개발을 즐기며 clean code와 데이터베이스 튜닝에 관심이 있습니다."
      },
      experience: {
        second: {
          title: "LINE Plus",
          'title-2': "Software Engineer",
          subtitle: "(2022 ~ Current)",
          description: "LINE에서 광고주들이 광고 지면 사용하고 사용료 지불을 쉽게 할 수 있도록 platform을 개발하고 있습니다. " +
                       "결제를 위한 계정 생성, 결제 수행, 영수증 발급 및 정산과 관련된 개발을 담당하고 있습니다."
        },
        first: {
          title: "조종사",
          subtitle: "(2015 ~ 2021)",
          description: "200 시간의 항공기 조종 경험이 있으며 사업용 조종사와 자가용 조종사 자격증을 보유하고 있습니다. " +
                       "현재는 소프트웨어 엔지니어이지만 종종 항공기를 조종하던 시절의 추억을 떠올립니다."
        },
      },
      projects: {
        onuMenu: {
          title: "Online Menu platform",
          functions: {
            title: "기능 목록",
            f1: "매장 정보 등록",
            f2: "스토리 등록",
            f3: "메뉴 등록",
            f4: "추천목록 등록",
            f5: "매장 페이지로 이동이 가능한 QR 코드 생성기능"
          },
          skills: {
            title: "기술 스택",
            s1: "Vue",
            s2: "Firebase"
          },
          links: {
            l1: "매장 정보 확인",
            l2: "매장 정보 등록"
          }
        },
        notToDoList: {
          title: "하지 않기로 스스로에게 약속한 것들을 관리하는 앱",
          functions: {
            title: "기능 목록",
            f1: "CRUD boards",
            f2: "CRUD tasks",
            f3: "Board drag and drop",
            f4: "Board data 저장",
            f5: "저장된 Board data 불러오기"
          },
          skills: {
            title: "기술 스택",
            s1: "Vue",
            s2: "Browser APIs (local storage, drag and drop)"
          }
        }
      }
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

export default i18n
