window.BENCHMARK_DATA = {
  "lastUpdate": 1737745335750,
  "repoUrl": "https://github.com/sourcemeta/noa",
  "entries": {
    "Benchmark (linux/gcc)": [
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4fe72e795c684035712bc7ac38d96e84f62ff414",
          "message": "Implement a general-purpose `regex` module (#17)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-20T19:49:42-04:00",
          "tree_id": "b414871b4630b8a362a5bb2110aab958bc223b8d",
          "url": "https://github.com/sourcemeta/noa/commit/4fe72e795c684035712bc7ac38d96e84f62ff414"
        },
        "date": 1737417080179,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.8094408380892277,
            "unit": "ns/iter",
            "extra": "iterations: 246105354\ncpu: 2.809334347110547 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.800457062500076,
            "unit": "ns/iter",
            "extra": "iterations: 250149159\ncpu: 2.8003989451749463 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.7991014436916983,
            "unit": "ns/iter",
            "extra": "iterations: 250225387\ncpu: 2.799040754405947 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.7975359653796312,
            "unit": "ns/iter",
            "extra": "iterations: 250226679\ncpu: 2.797469921262872 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.7974152550321243,
            "unit": "ns/iter",
            "extra": "iterations: 250218574\ncpu: 2.797368228147601 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.797280755508727,
            "unit": "ns/iter",
            "extra": "iterations: 250338137\ncpu: 2.7972610661395145 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 3.1182246064314145,
            "unit": "ns/iter",
            "extra": "iterations: 225251306\ncpu: 3.118155394845966 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 3.109424444840286,
            "unit": "ns/iter",
            "extra": "iterations: 225152095\ncpu: 3.1093692021830805 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 4.038881449685266,
            "unit": "ns/iter",
            "extra": "iterations: 172535645\ncpu: 4.0386635352944005 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 3.728196319401619,
            "unit": "ns/iter",
            "extra": "iterations: 187496578\ncpu: 3.728101325667933 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 13.046530120601181,
            "unit": "ns/iter",
            "extra": "iterations: 53622685\ncpu: 13.046280412851372 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 90.17592732221635,
            "unit": "ns/iter",
            "extra": "iterations: 7778553\ncpu: 90.1741550131497 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 7.477859538567873,
            "unit": "ns/iter",
            "extra": "iterations: 93845989\ncpu: 7.477679488251754 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 4.353034796556118,
            "unit": "ns/iter",
            "extra": "iterations: 160828359\ncpu: 4.352957011766814 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 836.2286103626799,
            "unit": "ns/iter",
            "extra": "iterations: 838046\ncpu: 836.2029470935976 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "75ac6ef239d0167beeb69e5dc49695ed3ea2d63a",
          "message": "Integrate with Doxygen (#18)\n\nFixes: https://github.com/sourcemeta/noa/issues/16\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-21T08:15:02-04:00",
          "tree_id": "1a85a1066297b60ab65b746822b221cd6486bf60",
          "url": "https://github.com/sourcemeta/noa/commit/75ac6ef239d0167beeb69e5dc49695ed3ea2d63a"
        },
        "date": 1737461799607,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 3.7373378792213074,
            "unit": "ns/iter",
            "extra": "iterations: 187354377\ncpu: 3.737102384322732 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 3.732915605269467,
            "unit": "ns/iter",
            "extra": "iterations: 187712869\ncpu: 3.732858938936146 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 3.7277408699883416,
            "unit": "ns/iter",
            "extra": "iterations: 187626156\ncpu: 3.7276910954781823 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 3.729865232892065,
            "unit": "ns/iter",
            "extra": "iterations: 187732529\ncpu: 3.7298109908272736 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 3.7286120446282225,
            "unit": "ns/iter",
            "extra": "iterations: 187549683\ncpu: 3.728290487166537 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 3.735000101437579,
            "unit": "ns/iter",
            "extra": "iterations: 187849687\ncpu: 3.7346834440027594 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 3.7284682525581343,
            "unit": "ns/iter",
            "extra": "iterations: 187743111\ncpu: 3.7283120870411026 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 3.729408053607998,
            "unit": "ns/iter",
            "extra": "iterations: 187764317\ncpu: 3.7292627810639907 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 4.0412622271419965,
            "unit": "ns/iter",
            "extra": "iterations: 173298571\ncpu: 4.040961359110113 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 3.7289834464640346,
            "unit": "ns/iter",
            "extra": "iterations: 187722430\ncpu: 3.7287250703072687 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 12.434771186679681,
            "unit": "ns/iter",
            "extra": "iterations: 56302404\ncpu: 12.4341182127854 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 89.76647553817762,
            "unit": "ns/iter",
            "extra": "iterations: 7800686\ncpu: 89.76288752040524 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 7.454025215163079,
            "unit": "ns/iter",
            "extra": "iterations: 93880733\ncpu: 7.453355056356458 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 4.35581940964501,
            "unit": "ns/iter",
            "extra": "iterations: 160899955\ncpu: 4.355571429463724 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 831.1996237559634,
            "unit": "ns/iter",
            "extra": "iterations: 844133\ncpu: 831.1507653414801 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb4bc3f8d5098b313c58f3bdc02818e6606f7d66",
          "message": "Revise installation instructions (#19)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-21T08:25:44-04:00",
          "tree_id": "34bb6afc3c0aca99c0e2bc48adbb6585252bca66",
          "url": "https://github.com/sourcemeta/noa/commit/cb4bc3f8d5098b313c58f3bdc02818e6606f7d66"
        },
        "date": 1737462456214,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.8019613383874606,
            "unit": "ns/iter",
            "extra": "iterations: 246803001\ncpu: 2.8018852939312513 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.8031456428551347,
            "unit": "ns/iter",
            "extra": "iterations: 249325825\ncpu: 2.802982731532124 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.8081058846602422,
            "unit": "ns/iter",
            "extra": "iterations: 248932829\ncpu: 2.8079742266537306 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.8060186693585236,
            "unit": "ns/iter",
            "extra": "iterations: 250164033\ncpu: 2.805900710754851 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.7967410655670606,
            "unit": "ns/iter",
            "extra": "iterations: 250293529\ncpu: 2.7965512684109366 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.7990612105822903,
            "unit": "ns/iter",
            "extra": "iterations: 249939119\ncpu: 2.7989266338095717 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 3.107320514627194,
            "unit": "ns/iter",
            "extra": "iterations: 225114556\ncpu: 3.107150827687925 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 3.1089552872498416,
            "unit": "ns/iter",
            "extra": "iterations: 225072758\ncpu: 3.10884264367525 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 4.047230377136683,
            "unit": "ns/iter",
            "extra": "iterations: 173355931\ncpu: 4.047184892681863 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 3.7292546831158737,
            "unit": "ns/iter",
            "extra": "iterations: 187658341\ncpu: 3.729219081181155 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 12.433255934837783,
            "unit": "ns/iter",
            "extra": "iterations: 56313756\ncpu: 12.43268896857104 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 90.8073359243413,
            "unit": "ns/iter",
            "extra": "iterations: 7719000\ncpu: 90.80188470009061 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 7.464370598109969,
            "unit": "ns/iter",
            "extra": "iterations: 93903555\ncpu: 7.46406546589212 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 4.35124707548513,
            "unit": "ns/iter",
            "extra": "iterations: 160849325\ncpu: 4.351100559483223 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 843.6162605705259,
            "unit": "ns/iter",
            "extra": "iterations: 829073\ncpu: 843.5600363297317 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00e1e5e9cc3634c066651e77a5b7d52775215bb9",
          "message": "Namespace all CMake utilities under `cmake/noa` (#20)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-21T08:28:37-04:00",
          "tree_id": "d277552ba69101ab57312412ed68c9c17b86fc20",
          "url": "https://github.com/sourcemeta/noa/commit/00e1e5e9cc3634c066651e77a5b7d52775215bb9"
        },
        "date": 1737462615982,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 3.7487259293773683,
            "unit": "ns/iter",
            "extra": "iterations: 187164664\ncpu: 3.7486027170171394 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 3.7312161642801094,
            "unit": "ns/iter",
            "extra": "iterations: 187337709\ncpu: 3.7312070684071386 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 3.7433664394349293,
            "unit": "ns/iter",
            "extra": "iterations: 187577205\ncpu: 3.7433579202760794 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 3.7290842429779083,
            "unit": "ns/iter",
            "extra": "iterations: 187830053\ncpu: 3.7290355606724988 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 3.7272123809266735,
            "unit": "ns/iter",
            "extra": "iterations: 187586864\ncpu: 3.72715346422125 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 3.729754195713529,
            "unit": "ns/iter",
            "extra": "iterations: 187681430\ncpu: 3.729668705103111 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 3.7406493360385094,
            "unit": "ns/iter",
            "extra": "iterations: 187548500\ncpu: 3.7406406662809895 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 3.7382438093859043,
            "unit": "ns/iter",
            "extra": "iterations: 187646328\ncpu: 3.7381041157384143 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 3.9647722883590624,
            "unit": "ns/iter",
            "extra": "iterations: 173185788\ncpu: 3.9645974241258157 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 3.7278505980939194,
            "unit": "ns/iter",
            "extra": "iterations: 187812972\ncpu: 3.72762647619463 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 12.432600813308705,
            "unit": "ns/iter",
            "extra": "iterations: 56296436\ncpu: 12.432108100058072 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 90.944732553008,
            "unit": "ns/iter",
            "extra": "iterations: 7739945\ncpu: 90.93303066107069 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 6.526078380092884,
            "unit": "ns/iter",
            "extra": "iterations: 106983313\ncpu: 6.525723567749291 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 4.350799536750465,
            "unit": "ns/iter",
            "extra": "iterations: 160671914\ncpu: 4.350322577224048 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 838.4503911143654,
            "unit": "ns/iter",
            "extra": "iterations: 834155\ncpu: 838.4266904831837 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8d36453236abc365f08a76a486f92c84f976fd9",
          "message": "Enable GoogleMock in the GoogleTest setup (#22)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-21T11:50:03-04:00",
          "tree_id": "3e8d53c7aaefdb8ffbadf3b9f6b142b620374df8",
          "url": "https://github.com/sourcemeta/noa/commit/a8d36453236abc365f08a76a486f92c84f976fd9"
        },
        "date": 1737474700090,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.8208116172311346,
            "unit": "ns/iter",
            "extra": "iterations: 250250749\ncpu: 2.8207541109097733 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.798231065831895,
            "unit": "ns/iter",
            "extra": "iterations: 250244926\ncpu: 2.798229910963309 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.8014768735681277,
            "unit": "ns/iter",
            "extra": "iterations: 250398550\ncpu: 2.8014901523990443 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.797324800268581,
            "unit": "ns/iter",
            "extra": "iterations: 248736269\ncpu: 2.797186026779231 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.798641418842623,
            "unit": "ns/iter",
            "extra": "iterations: 250438480\ncpu: 2.7985804897074926 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.797294178924667,
            "unit": "ns/iter",
            "extra": "iterations: 250438141\ncpu: 2.7971494885038273 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 3.103404449730572,
            "unit": "ns/iter",
            "extra": "iterations: 225343436\ncpu: 3.103371486711508 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.798268590426223,
            "unit": "ns/iter",
            "extra": "iterations: 250308423\ncpu: 2.798215595805175 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 3.1188416543606,
            "unit": "ns/iter",
            "extra": "iterations: 225208393\ncpu: 3.1188121749974003 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.797310754872871,
            "unit": "ns/iter",
            "extra": "iterations: 250276999\ncpu: 2.797255172457936 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 13.0520055706882,
            "unit": "ns/iter",
            "extra": "iterations: 53645080\ncpu: 13.051562212228975 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 92.00454287977497,
            "unit": "ns/iter",
            "extra": "iterations: 7622918\ncpu: 91.99808354228662 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 7.4564707993929895,
            "unit": "ns/iter",
            "extra": "iterations: 93590554\ncpu: 7.456239504683363 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 4.3521142741833,
            "unit": "ns/iter",
            "extra": "iterations: 160769191\ncpu: 4.35184896215594 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 836.9535201370908,
            "unit": "ns/iter",
            "extra": "iterations: 836814\ncpu: 836.9151257029642 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dee6c859895baf918fe3ecca22e4e7a262c5d500",
          "message": "Remove `PARENT_SCOPE` from defaults (#23)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-21T14:07:32-04:00",
          "tree_id": "c3e4bab5abb3f920d76a5e2e2ab1acf1d1eee70d",
          "url": "https://github.com/sourcemeta/noa/commit/dee6c859895baf918fe3ecca22e4e7a262c5d500"
        },
        "date": 1737482988896,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 3.786738010547388,
            "unit": "ns/iter",
            "extra": "iterations: 177287805\ncpu: 3.786542605116014 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 3.730532334392828,
            "unit": "ns/iter",
            "extra": "iterations: 187522432\ncpu: 3.7302818843561085 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 3.73133564299644,
            "unit": "ns/iter",
            "extra": "iterations: 187447537\ncpu: 3.731116274950042 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 3.8180494360095425,
            "unit": "ns/iter",
            "extra": "iterations: 187739506\ncpu: 3.8178196228981243 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 3.730548333085765,
            "unit": "ns/iter",
            "extra": "iterations: 186193233\ncpu: 3.7303318644238836 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 3.7355019354562153,
            "unit": "ns/iter",
            "extra": "iterations: 187431001\ncpu: 3.735399113618349 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 3.733263934711815,
            "unit": "ns/iter",
            "extra": "iterations: 187639654\ncpu: 3.733222344355847 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 3.7434049633905113,
            "unit": "ns/iter",
            "extra": "iterations: 187608208\ncpu: 3.743263237182034 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 3.730273977422687,
            "unit": "ns/iter",
            "extra": "iterations: 186670272\ncpu: 3.730198046746299 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 3.7315118733756156,
            "unit": "ns/iter",
            "extra": "iterations: 187467750\ncpu: 3.731316997190182 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 12.432853315987073,
            "unit": "ns/iter",
            "extra": "iterations: 56289563\ncpu: 12.432398311566228 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 89.96186539682355,
            "unit": "ns/iter",
            "extra": "iterations: 7793709\ncpu: 89.95933527926188 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 7.459171469429547,
            "unit": "ns/iter",
            "extra": "iterations: 93675071\ncpu: 7.45880077315339 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 4.362563355124208,
            "unit": "ns/iter",
            "extra": "iterations: 160873925\ncpu: 4.362454425103383 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 831.7769158751794,
            "unit": "ns/iter",
            "extra": "iterations: 841678\ncpu: 831.7304563027657 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dee6c859895baf918fe3ecca22e4e7a262c5d500",
          "message": "Remove `PARENT_SCOPE` from defaults (#23)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-21T18:07:32Z",
          "url": "https://github.com/sourcemeta/noa/commit/dee6c859895baf918fe3ecca22e4e7a262c5d500"
        },
        "date": 1737486240355,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 3.8433429971505553,
            "unit": "ns/iter",
            "extra": "iterations: 184026660\ncpu: 3.84301343077139 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 3.7283824779911465,
            "unit": "ns/iter",
            "extra": "iterations: 187530895\ncpu: 3.728346243961563 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 3.739631700283543,
            "unit": "ns/iter",
            "extra": "iterations: 187680025\ncpu: 3.7395628970104835 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 3.729273099650745,
            "unit": "ns/iter",
            "extra": "iterations: 183961612\ncpu: 3.7292745075532383 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 3.7293807860939703,
            "unit": "ns/iter",
            "extra": "iterations: 187764081\ncpu: 3.7291190960000464 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 3.7436154016284724,
            "unit": "ns/iter",
            "extra": "iterations: 187809386\ncpu: 3.743503101596851 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 3.731503149172853,
            "unit": "ns/iter",
            "extra": "iterations: 187773599\ncpu: 3.7315027976856365 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 3.7286430191713738,
            "unit": "ns/iter",
            "extra": "iterations: 187725364\ncpu: 3.728561181535377 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 3.7335356973195317,
            "unit": "ns/iter",
            "extra": "iterations: 186259756\ncpu: 3.7334718939500813 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 3.7305323806398234,
            "unit": "ns/iter",
            "extra": "iterations: 187742383\ncpu: 3.7303848593420668 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 12.437692027191117,
            "unit": "ns/iter",
            "extra": "iterations: 56305828\ncpu: 12.437656347048133 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 90.19824209057087,
            "unit": "ns/iter",
            "extra": "iterations: 7767977\ncpu: 90.19644329533942 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 6.527208008852806,
            "unit": "ns/iter",
            "extra": "iterations: 105055942\ncpu: 6.526988259264766 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 4.353926847136189,
            "unit": "ns/iter",
            "extra": "iterations: 160881740\ncpu: 4.353844836586173 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 875.6715266735343,
            "unit": "ns/iter",
            "extra": "iterations: 799313\ncpu: 875.6148417453492 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dbc1e2a1acdaf71be1414dc0cae792f45f1f185e",
          "message": "Implement a `try_at` method in `FlatMap` (#24)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-21T16:20:04-04:00",
          "tree_id": "537b536c2c5aeb5bb70a225671ad35dae85df1dc",
          "url": "https://github.com/sourcemeta/noa/commit/dbc1e2a1acdaf71be1414dc0cae792f45f1f185e"
        },
        "date": 1737491153431,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 3.736762465505039,
            "unit": "ns/iter",
            "extra": "iterations: 187066047\ncpu: 3.7367551311970577 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 3.7340562042289385,
            "unit": "ns/iter",
            "extra": "iterations: 187068628\ncpu: 3.7340520079080277 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 3.744992826093141,
            "unit": "ns/iter",
            "extra": "iterations: 186716253\ncpu: 3.744986517054839 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 3.7330429399917175,
            "unit": "ns/iter",
            "extra": "iterations: 187441396\ncpu: 3.733085267888209 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 3.727543953006515,
            "unit": "ns/iter",
            "extra": "iterations: 187797278\ncpu: 3.72723401773693 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 3.7269971728372786,
            "unit": "ns/iter",
            "extra": "iterations: 187813740\ncpu: 3.726868220610483 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 3.7359934596843387,
            "unit": "ns/iter",
            "extra": "iterations: 187693691\ncpu: 3.7358826248453925 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 3.728383874301665,
            "unit": "ns/iter",
            "extra": "iterations: 187700796\ncpu: 3.728261546637233 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 3.7313267093809617,
            "unit": "ns/iter",
            "extra": "iterations: 187808516\ncpu: 3.731094025576565 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 3.7273399209081446,
            "unit": "ns/iter",
            "extra": "iterations: 187774819\ncpu: 3.727381667719779 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 12.440941385608477,
            "unit": "ns/iter",
            "extra": "iterations: 56323062\ncpu: 12.44026372358803 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 91.7557622287665,
            "unit": "ns/iter",
            "extra": "iterations: 7630511\ncpu: 91.74911352594859 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 7.462789220130224,
            "unit": "ns/iter",
            "extra": "iterations: 93916051\ncpu: 7.462476217191032 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 4.365602744763098,
            "unit": "ns/iter",
            "extra": "iterations: 160473746\ncpu: 4.365276828522467 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 836.8215427948625,
            "unit": "ns/iter",
            "extra": "iterations: 838582\ncpu: 836.7629498367485 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "214d23ba8488792fba67fdf43f96451cd9c1d105",
          "message": "Support accessing `FlatMap` entries by positional indices (#25)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-22T10:35:46-04:00",
          "tree_id": "e3123b35ffa09c5fe13f458cfd99d6b8e02b0081",
          "url": "https://github.com/sourcemeta/noa/commit/214d23ba8488792fba67fdf43f96451cd9c1d105"
        },
        "date": 1737556654792,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 3.7418133562061575,
            "unit": "ns/iter",
            "extra": "iterations: 184718920\ncpu: 3.7417784815978785 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 3.7278165694701837,
            "unit": "ns/iter",
            "extra": "iterations: 187760849\ncpu: 3.72773172217601 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 3.7297565229277674,
            "unit": "ns/iter",
            "extra": "iterations: 187797765\ncpu: 3.729736362943404 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 3.7288010954764115,
            "unit": "ns/iter",
            "extra": "iterations: 187772934\ncpu: 3.728822967638137 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 3.7357140064808174,
            "unit": "ns/iter",
            "extra": "iterations: 187656672\ncpu: 3.7354607780745512 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 3.7282925348027427,
            "unit": "ns/iter",
            "extra": "iterations: 187117483\ncpu: 3.7281217062972174 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 3.7309961505397142,
            "unit": "ns/iter",
            "extra": "iterations: 187717481\ncpu: 3.730807031232213 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 3.7296894842484156,
            "unit": "ns/iter",
            "extra": "iterations: 187690704\ncpu: 3.729515975388957 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 3.7324915127605673,
            "unit": "ns/iter",
            "extra": "iterations: 187744204\ncpu: 3.732406492825739 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 3.7279085104007583,
            "unit": "ns/iter",
            "extra": "iterations: 187565102\ncpu: 3.727905690046761 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 12.431306255993519,
            "unit": "ns/iter",
            "extra": "iterations: 56314444\ncpu: 12.431005960033966 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 89.63559153647003,
            "unit": "ns/iter",
            "extra": "iterations: 7826001\ncpu: 89.63521369343054 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 6.522908908999184,
            "unit": "ns/iter",
            "extra": "iterations: 107225905\ncpu: 6.522775974704995 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 4.357682754572321,
            "unit": "ns/iter",
            "extra": "iterations: 160869313\ncpu: 4.35770740190829 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 836.166719026071,
            "unit": "ns/iter",
            "extra": "iterations: 837163\ncpu: 836.1540619927046 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2ce51f80794ad6dfd9547efa0d3b3d8fa85adbcf",
          "message": "Don't use iterators for `FlatMap` equality checks (#26)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-22T14:59:58-04:00",
          "tree_id": "c393324e26ea5082bda351df5422cea63ed82ee6",
          "url": "https://github.com/sourcemeta/noa/commit/2ce51f80794ad6dfd9547efa0d3b3d8fa85adbcf"
        },
        "date": 1737572498347,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.8139461901879828,
            "unit": "ns/iter",
            "extra": "iterations: 250052649\ncpu: 2.8138323861548047 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.798557939344714,
            "unit": "ns/iter",
            "extra": "iterations: 250320816\ncpu: 2.798542211527466 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.7988072099820847,
            "unit": "ns/iter",
            "extra": "iterations: 250178150\ncpu: 2.7987128971894637 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.7997438853602845,
            "unit": "ns/iter",
            "extra": "iterations: 250131738\ncpu: 2.7997655899228615 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.8000143146004377,
            "unit": "ns/iter",
            "extra": "iterations: 250220044\ncpu: 2.7998710926611454 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.800024125389924,
            "unit": "ns/iter",
            "extra": "iterations: 250267459\ncpu: 2.799960693251774 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 3.1106701504524903,
            "unit": "ns/iter",
            "extra": "iterations: 225333027\ncpu: 3.1104642507642684 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 3.1109992067622803,
            "unit": "ns/iter",
            "extra": "iterations: 225388917\ncpu: 3.11102290801637 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 4.042629948601212,
            "unit": "ns/iter",
            "extra": "iterations: 173248344\ncpu: 4.042459193722514 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 3.728267478032703,
            "unit": "ns/iter",
            "extra": "iterations: 187707138\ncpu: 3.7282567272428397 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 12.431246292976804,
            "unit": "ns/iter",
            "extra": "iterations: 56317087\ncpu: 12.430606575940269 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 89.44119480044044,
            "unit": "ns/iter",
            "extra": "iterations: 7830362\ncpu: 89.43932758153456 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 7.466836649321551,
            "unit": "ns/iter",
            "extra": "iterations: 93677009\ncpu: 7.466586950913438 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 4.350941167399434,
            "unit": "ns/iter",
            "extra": "iterations: 159862422\ncpu: 4.350862612353007 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 831.4294948549976,
            "unit": "ns/iter",
            "extra": "iterations: 838492\ncpu: 831.3938499115068 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2ce51f80794ad6dfd9547efa0d3b3d8fa85adbcf",
          "message": "Don't use iterators for `FlatMap` equality checks (#26)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-22T18:59:58Z",
          "url": "https://github.com/sourcemeta/noa/commit/2ce51f80794ad6dfd9547efa0d3b3d8fa85adbcf"
        },
        "date": 1737572626801,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 3.770786870485235,
            "unit": "ns/iter",
            "extra": "iterations: 185872520\ncpu: 3.770654354931003 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 3.735314059678621,
            "unit": "ns/iter",
            "extra": "iterations: 187614374\ncpu: 3.7353053023538605 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 3.727509428353618,
            "unit": "ns/iter",
            "extra": "iterations: 187552625\ncpu: 3.7272888502626924 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 3.7295070585594408,
            "unit": "ns/iter",
            "extra": "iterations: 187554347\ncpu: 3.7293368998800136 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 3.728761856055969,
            "unit": "ns/iter",
            "extra": "iterations: 187817201\ncpu: 3.728504004273816 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 3.728782825792606,
            "unit": "ns/iter",
            "extra": "iterations: 187852584\ncpu: 3.728556749584025 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 3.7316578515933205,
            "unit": "ns/iter",
            "extra": "iterations: 187769280\ncpu: 3.7312817144529724 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 3.7284569965221452,
            "unit": "ns/iter",
            "extra": "iterations: 186976215\ncpu: 3.728230379462975 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 3.737368029768578,
            "unit": "ns/iter",
            "extra": "iterations: 185103013\ncpu: 3.7372824936134306 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 3.72916489460547,
            "unit": "ns/iter",
            "extra": "iterations: 187246653\ncpu: 3.7291143196028194 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 12.43627743188768,
            "unit": "ns/iter",
            "extra": "iterations: 56315574\ncpu: 12.435335436694665 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 89.74251022654886,
            "unit": "ns/iter",
            "extra": "iterations: 7820330\ncpu: 89.73550374472697 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 7.467573820468832,
            "unit": "ns/iter",
            "extra": "iterations: 93942982\ncpu: 7.466776592209949 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 4.352194698386374,
            "unit": "ns/iter",
            "extra": "iterations: 160293347\ncpu: 4.351928879493676 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 829.1964580087097,
            "unit": "ns/iter",
            "extra": "iterations: 843198\ncpu: 829.1123283024878 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1827a68799cfef6f1b9bf967f66d21dd42a84f96",
          "message": "Attempt to enable SIMD if possible (#28)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-23T13:05:21-04:00",
          "tree_id": "c439aa8a8d6b63c0b37738d751a94716528a54bd",
          "url": "https://github.com/sourcemeta/noa/commit/1827a68799cfef6f1b9bf967f66d21dd42a84f96"
        },
        "date": 1737652047803,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 3.1249287837788944,
            "unit": "ns/iter",
            "extra": "iterations: 224151882\ncpu: 3.1248289273788026 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 3.119018875195122,
            "unit": "ns/iter",
            "extra": "iterations: 224029684\ncpu: 3.118924610901115 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.8015428769508715,
            "unit": "ns/iter",
            "extra": "iterations: 250112363\ncpu: 2.801451641956619 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.798729127164951,
            "unit": "ns/iter",
            "extra": "iterations: 250186007\ncpu: 2.7986057789395082 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 3.420409035207511,
            "unit": "ns/iter",
            "extra": "iterations: 204647469\ncpu: 3.4202770619166545 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 3.729862031355302,
            "unit": "ns/iter",
            "extra": "iterations: 187650245\ncpu: 3.7296776457712566 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 3.420930968479916,
            "unit": "ns/iter",
            "extra": "iterations: 204830952\ncpu: 3.420804420222582 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 3.7304511730561876,
            "unit": "ns/iter",
            "extra": "iterations: 187825733\ncpu: 3.7302741951764418 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 4.351715551275188,
            "unit": "ns/iter",
            "extra": "iterations: 160875926\ncpu: 4.351570408365515 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 4.037628557356127,
            "unit": "ns/iter",
            "extra": "iterations: 172707445\ncpu: 4.0374605333313855 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 13.047107498504454,
            "unit": "ns/iter",
            "extra": "iterations: 53654579\ncpu: 13.046933161100757 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 90.095425579982,
            "unit": "ns/iter",
            "extra": "iterations: 7770537\ncpu: 90.0911225311712 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 7.152522430265397,
            "unit": "ns/iter",
            "extra": "iterations: 97838344\ncpu: 7.15226234818529 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 4.042552699930239,
            "unit": "ns/iter",
            "extra": "iterations: 173308768\ncpu: 4.042323640544263 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 820.6497638430028,
            "unit": "ns/iter",
            "extra": "iterations: 857904\ncpu: 820.6171879371138 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1827a68799cfef6f1b9bf967f66d21dd42a84f96",
          "message": "Attempt to enable SIMD if possible (#28)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-23T17:05:21Z",
          "url": "https://github.com/sourcemeta/noa/commit/1827a68799cfef6f1b9bf967f66d21dd42a84f96"
        },
        "date": 1737658932310,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 3.1174134557305466,
            "unit": "ns/iter",
            "extra": "iterations: 221091704\ncpu: 3.1172606232208517 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 3.1151028120611066,
            "unit": "ns/iter",
            "extra": "iterations: 224912863\ncpu: 3.114909639472243 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.796373340332538,
            "unit": "ns/iter",
            "extra": "iterations: 250103479\ncpu: 2.7962789953833473 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.796204388117546,
            "unit": "ns/iter",
            "extra": "iterations: 250353732\ncpu: 2.796031340966787 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 3.4199081244947207,
            "unit": "ns/iter",
            "extra": "iterations: 204755119\ncpu: 3.4197293890366662 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 3.731521728928112,
            "unit": "ns/iter",
            "extra": "iterations: 186656424\ncpu: 3.731249844366462 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 3.4202277649928323,
            "unit": "ns/iter",
            "extra": "iterations: 204817428\ncpu: 3.4200349835464228 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 3.7328730782460786,
            "unit": "ns/iter",
            "extra": "iterations: 187620595\ncpu: 3.7325758187687264 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 4.351309184848928,
            "unit": "ns/iter",
            "extra": "iterations: 160845621\ncpu: 4.351152195806443 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 4.041458569886005,
            "unit": "ns/iter",
            "extra": "iterations: 173093139\ncpu: 4.041277395749341 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 13.051231052360245,
            "unit": "ns/iter",
            "extra": "iterations: 53636630\ncpu: 13.050777817323706 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 92.96953215671292,
            "unit": "ns/iter",
            "extra": "iterations: 7535814\ncpu: 92.9630241669977 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 7.150552286374502,
            "unit": "ns/iter",
            "extra": "iterations: 97860553\ncpu: 7.150226700640041 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 3.5754496964930325,
            "unit": "ns/iter",
            "extra": "iterations: 173216661\ncpu: 3.5751768878630017 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 914.056690844017,
            "unit": "ns/iter",
            "extra": "iterations: 770142\ncpu: 914.0542627203813 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jv@jviotti.com",
            "name": "Juan Cruz Viotti",
            "username": "jviotti"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "71b30bfd8e5a4c17f389d010bdad6b6e1b1a026f",
          "message": "Fix GitHub Pages deployment (#29)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-24T09:43:42-04:00",
          "tree_id": "c6895204be804536949e900e829eff26594d733f",
          "url": "https://github.com/sourcemeta/noa/commit/71b30bfd8e5a4c17f389d010bdad6b6e1b1a026f"
        },
        "date": 1737726325909,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 3.172389845282181,
            "unit": "ns/iter",
            "extra": "iterations: 223454206\ncpu: 3.172210443870544 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 3.1085038228679087,
            "unit": "ns/iter",
            "extra": "iterations: 225124962\ncpu: 3.1083951587740857 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.8094070252637193,
            "unit": "ns/iter",
            "extra": "iterations: 250297510\ncpu: 2.8093421544625032 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.795716629067524,
            "unit": "ns/iter",
            "extra": "iterations: 250325040\ncpu: 2.7957280901662895 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 3.420001284386678,
            "unit": "ns/iter",
            "extra": "iterations: 204829276\ncpu: 3.420009500985593 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 3.726451862815801,
            "unit": "ns/iter",
            "extra": "iterations: 187657933\ncpu: 3.7264927990014685 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 3.4172819470527043,
            "unit": "ns/iter",
            "extra": "iterations: 204300082\ncpu: 3.417209078751127 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 3.7278749279937435,
            "unit": "ns/iter",
            "extra": "iterations: 187527175\ncpu: 3.7278862863475646 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 4.350965193374753,
            "unit": "ns/iter",
            "extra": "iterations: 160988517\ncpu: 4.3509754611877085 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 4.040264505532579,
            "unit": "ns/iter",
            "extra": "iterations: 173243106\ncpu: 4.040231159328211 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 13.048188098699846,
            "unit": "ns/iter",
            "extra": "iterations: 53632226\ncpu: 13.048020195917267 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 89.36984199383566,
            "unit": "ns/iter",
            "extra": "iterations: 7820391\ncpu: 89.36866315252006 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 6.214307573386053,
            "unit": "ns/iter",
            "extra": "iterations: 111888673\ncpu: 6.214324572425671 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 4.0593911724155705,
            "unit": "ns/iter",
            "extra": "iterations: 170621737\ncpu: 4.059402149914819 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 839.1952918534244,
            "unit": "ns/iter",
            "extra": "iterations: 847977\ncpu: 839.1983438230059 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Juan Cruz Viotti",
            "username": "jviotti",
            "email": "jv@jviotti.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "71b30bfd8e5a4c17f389d010bdad6b6e1b1a026f",
          "message": "Fix GitHub Pages deployment (#29)\n\nSigned-off-by: Juan Cruz Viotti <jv@jviotti.com>",
          "timestamp": "2025-01-24T13:43:42Z",
          "url": "https://github.com/sourcemeta/noa/commit/71b30bfd8e5a4c17f389d010bdad6b6e1b1a026f"
        },
        "date": 1737745335406,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 3.1562691855401717,
            "unit": "ns/iter",
            "extra": "iterations: 217458694\ncpu: 3.156193870087347 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 3.107150383323892,
            "unit": "ns/iter",
            "extra": "iterations: 225128406\ncpu: 3.107050271568128 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.795961402927241,
            "unit": "ns/iter",
            "extra": "iterations: 250170785\ncpu: 2.795900580477454 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.797435004379296,
            "unit": "ns/iter",
            "extra": "iterations: 249738672\ncpu: 2.7973734079918535 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 3.4173362797937163,
            "unit": "ns/iter",
            "extra": "iterations: 204731525\ncpu: 3.4172573715748 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 3.728794840147379,
            "unit": "ns/iter",
            "extra": "iterations: 187676680\ncpu: 3.72869235005649 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 3.419450356873046,
            "unit": "ns/iter",
            "extra": "iterations: 204691689\ncpu: 3.4193962706517107 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 3.5195031949493583,
            "unit": "ns/iter",
            "extra": "iterations: 187671200\ncpu: 3.519449585232045 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 3.429793917716271,
            "unit": "ns/iter",
            "extra": "iterations: 204741520\ncpu: 3.4296879157681284 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 3.110120413582833,
            "unit": "ns/iter",
            "extra": "iterations: 225331473\ncpu: 3.1100366880395725 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 7.770861067251063,
            "unit": "ns/iter",
            "extra": "iterations: 90097260\ncpu: 7.7704993581380855 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 88.77925529660764,
            "unit": "ns/iter",
            "extra": "iterations: 7905295\ncpu: 88.77884455924784 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 6.211317555331105,
            "unit": "ns/iter",
            "extra": "iterations: 112368260\ncpu: 6.211236010951861 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 3.4164996953168134,
            "unit": "ns/iter",
            "extra": "iterations: 204617439\ncpu: 3.416458682194726 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 820.6839005258655,
            "unit": "ns/iter",
            "extra": "iterations: 852121\ncpu: 820.6720266253274 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}