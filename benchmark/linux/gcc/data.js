window.BENCHMARK_DATA = {
  "lastUpdate": 1737482989845,
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
      }
    ]
  }
}