window.BENCHMARK_DATA = {
  "lastUpdate": 1737572599509,
  "repoUrl": "https://github.com/sourcemeta/noa",
  "entries": {
    "Benchmark (linux/llvm)": [
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
        "date": 1737417059918,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.2294947953115813,
            "unit": "ns/iter",
            "extra": "iterations: 313492835\ncpu: 2.229395057784973 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.20522662675356,
            "unit": "ns/iter",
            "extra": "iterations: 318310543\ncpu: 2.2051242990088458 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.1943424762263106,
            "unit": "ns/iter",
            "extra": "iterations: 315232754\ncpu: 2.1942098250361393 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.1988863102603715,
            "unit": "ns/iter",
            "extra": "iterations: 317378878\ncpu: 2.1987699729658767 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.4871549047499952,
            "unit": "ns/iter",
            "extra": "iterations: 281321425\ncpu: 2.48700496238422 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.4868247472658984,
            "unit": "ns/iter",
            "extra": "iterations: 281631903\ncpu: 2.486677111293035 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.508472699235676,
            "unit": "ns/iter",
            "extra": "iterations: 281574553\ncpu: 2.50833081496537 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.2651182711092424,
            "unit": "ns/iter",
            "extra": "iterations: 294259606\ncpu: 2.2649718493811886 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.5250521469414577,
            "unit": "ns/iter",
            "extra": "iterations: 281423984\ncpu: 2.524979185853612 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.486521506583184,
            "unit": "ns/iter",
            "extra": "iterations: 281463097\ncpu: 2.486400769618477 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 12.620319364648754,
            "unit": "ns/iter",
            "extra": "iterations: 55758269\ncpu: 12.620179152261722 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 73.1470442171812,
            "unit": "ns/iter",
            "extra": "iterations: 9576820\ncpu: 73.146798519759 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 7.151800943625272,
            "unit": "ns/iter",
            "extra": "iterations: 97991657\ncpu: 7.15146091467767 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 4.039886072826371,
            "unit": "ns/iter",
            "extra": "iterations: 172373977\ncpu: 4.039774281009943 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 458.14720363773114,
            "unit": "ns/iter",
            "extra": "iterations: 1527109\ncpu: 458.14239389591773 ns\nthreads: 1"
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
        "date": 1737461781455,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.20600729841394,
            "unit": "ns/iter",
            "extra": "iterations: 315678175\ncpu: 2.205891034437208 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.19436445844266,
            "unit": "ns/iter",
            "extra": "iterations: 313916734\ncpu: 2.194337910001319 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.2132751027122666,
            "unit": "ns/iter",
            "extra": "iterations: 318021223\ncpu: 2.213216433671787 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.1946338361276356,
            "unit": "ns/iter",
            "extra": "iterations: 318067029\ncpu: 2.194625303335041 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.4931859711546807,
            "unit": "ns/iter",
            "extra": "iterations: 281039095\ncpu: 2.4931365901245863 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.487156882689287,
            "unit": "ns/iter",
            "extra": "iterations: 281171729\ncpu: 2.487138292626851 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.4880760723311495,
            "unit": "ns/iter",
            "extra": "iterations: 281235604\ncpu: 2.488012325068202 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.492560836783036,
            "unit": "ns/iter",
            "extra": "iterations: 281245476\ncpu: 2.492574515225269 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 3.4183769253142535,
            "unit": "ns/iter",
            "extra": "iterations: 204662757\ncpu: 3.4182330153990765 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 3.4252526154440295,
            "unit": "ns/iter",
            "extra": "iterations: 203002434\ncpu: 3.425191493024161 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 12.628697584715987,
            "unit": "ns/iter",
            "extra": "iterations: 55646460\ncpu: 12.62821852459259 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 73.0676846559346,
            "unit": "ns/iter",
            "extra": "iterations: 9584122\ncpu: 73.0639221829604 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 6.215532206243607,
            "unit": "ns/iter",
            "extra": "iterations: 112608600\ncpu: 6.215562283875298 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 4.038892708580567,
            "unit": "ns/iter",
            "extra": "iterations: 173219332\ncpu: 4.038849728389431 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 467.1868595996581,
            "unit": "ns/iter",
            "extra": "iterations: 1529512\ncpu: 467.17787372704436 ns\nthreads: 1"
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
        "date": 1737462434702,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.287353693583009,
            "unit": "ns/iter",
            "extra": "iterations: 312636834\ncpu: 2.2872560083563287 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.20806376606112,
            "unit": "ns/iter",
            "extra": "iterations: 318364717\ncpu: 2.2079734451226902 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.201360855256599,
            "unit": "ns/iter",
            "extra": "iterations: 317986353\ncpu: 2.201312324872005 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.2054963835546655,
            "unit": "ns/iter",
            "extra": "iterations: 319071328\ncpu: 2.205376651705916 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.48634010708066,
            "unit": "ns/iter",
            "extra": "iterations: 281499132\ncpu: 2.486244714246577 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.4959071551378225,
            "unit": "ns/iter",
            "extra": "iterations: 281374579\ncpu: 2.4957184387293205 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.485709886721154,
            "unit": "ns/iter",
            "extra": "iterations: 281324117\ncpu: 2.4855782129763146 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.27854164034746,
            "unit": "ns/iter",
            "extra": "iterations: 278780587\ncpu: 2.2783504828476464 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.4871933499673218,
            "unit": "ns/iter",
            "extra": "iterations: 281421175\ncpu: 2.487012119823607 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.487850790669589,
            "unit": "ns/iter",
            "extra": "iterations: 281425886\ncpu: 2.487689312986655 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 12.624241968536674,
            "unit": "ns/iter",
            "extra": "iterations: 55338732\ncpu: 12.62360362720272 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 73.46069583978964,
            "unit": "ns/iter",
            "extra": "iterations: 9550503\ncpu: 73.45566898413621 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 7.151862218921022,
            "unit": "ns/iter",
            "extra": "iterations: 97936176\ncpu: 7.151698959534627 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 4.037211845856695,
            "unit": "ns/iter",
            "extra": "iterations: 173313359\ncpu: 4.037058308932786 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 458.9085852565885,
            "unit": "ns/iter",
            "extra": "iterations: 1526920\ncpu: 458.88418188248215 ns\nthreads: 1"
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
        "date": 1737462597689,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.2216309671230383,
            "unit": "ns/iter",
            "extra": "iterations: 315060097\ncpu: 2.2216185917063314 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.212820478682453,
            "unit": "ns/iter",
            "extra": "iterations: 318089605\ncpu: 2.2126642585506686 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.2121896821186984,
            "unit": "ns/iter",
            "extra": "iterations: 319309508\ncpu: 2.2120774649779613 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.2096838942837387,
            "unit": "ns/iter",
            "extra": "iterations: 315718998\ncpu: 2.2095545070746736 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.488256472377462,
            "unit": "ns/iter",
            "extra": "iterations: 281270680\ncpu: 2.4881289866401994 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.4676588345672585,
            "unit": "ns/iter",
            "extra": "iterations: 281118750\ncpu: 2.4674238947064198 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.213668016834423,
            "unit": "ns/iter",
            "extra": "iterations: 316169116\ncpu: 2.213644358609648 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.3911784217973056,
            "unit": "ns/iter",
            "extra": "iterations: 295313122\ncpu: 2.3910914497053732 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.4885277532812142,
            "unit": "ns/iter",
            "extra": "iterations: 281570130\ncpu: 2.488446448492248 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.491124144539115,
            "unit": "ns/iter",
            "extra": "iterations: 281613982\ncpu: 2.4910101764762462 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 7.461811921746178,
            "unit": "ns/iter",
            "extra": "iterations: 93878094\ncpu: 7.461639932740851 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 74.3991920990271,
            "unit": "ns/iter",
            "extra": "iterations: 9386794\ncpu: 74.39874956241711 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 7.146979872536253,
            "unit": "ns/iter",
            "extra": "iterations: 97232320\ncpu: 7.146928973822693 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 4.044755509583642,
            "unit": "ns/iter",
            "extra": "iterations: 173095292\ncpu: 4.044659360232626 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 457.7837694507018,
            "unit": "ns/iter",
            "extra": "iterations: 1517940\ncpu: 457.7640440333615 ns\nthreads: 1"
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
        "date": 1737474690992,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.2123996594762305,
            "unit": "ns/iter",
            "extra": "iterations: 318875902\ncpu: 2.2123154448968054 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.186860741527511,
            "unit": "ns/iter",
            "extra": "iterations: 318757410\ncpu: 2.186795472456624 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.200925791788141,
            "unit": "ns/iter",
            "extra": "iterations: 318612461\ncpu: 2.2008439399989457 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.2039292585814363,
            "unit": "ns/iter",
            "extra": "iterations: 317229771\ncpu: 2.203802495573468 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.33985323448753,
            "unit": "ns/iter",
            "extra": "iterations: 280129707\ncpu: 2.3397232197155025 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.2681044530728216,
            "unit": "ns/iter",
            "extra": "iterations: 307836267\ncpu: 2.2679557766336873 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.263218869617709,
            "unit": "ns/iter",
            "extra": "iterations: 311495829\ncpu: 2.263145478586809 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.2426024420551514,
            "unit": "ns/iter",
            "extra": "iterations: 309120458\ncpu: 2.2425106914146737 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.4083032486613094,
            "unit": "ns/iter",
            "extra": "iterations: 281447310\ncpu: 2.408250119711569 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.2298670779867695,
            "unit": "ns/iter",
            "extra": "iterations: 316335639\ncpu: 2.22984174413557 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 13.058262499449313,
            "unit": "ns/iter",
            "extra": "iterations: 53580760\ncpu: 13.057840594273037 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 73.06466976316669,
            "unit": "ns/iter",
            "extra": "iterations: 9575325\ncpu: 73.06405088077943 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.934042940095949,
            "unit": "ns/iter",
            "extra": "iterations: 112711346\ncpu: 5.933568852952918 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 3.108724925582336,
            "unit": "ns/iter",
            "extra": "iterations: 225219239\ncpu: 3.1086253603760756 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 460.9690536409628,
            "unit": "ns/iter",
            "extra": "iterations: 1523798\ncpu: 460.94037004904794 ns\nthreads: 1"
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
        "date": 1737482956237,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.2083154592934737,
            "unit": "ns/iter",
            "extra": "iterations: 297535796\ncpu: 2.208301971840726 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.185750771011445,
            "unit": "ns/iter",
            "extra": "iterations: 320350961\ncpu: 2.1856845530112206 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.1831235069459693,
            "unit": "ns/iter",
            "extra": "iterations: 320576140\ncpu: 2.1831068494367667 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.1858432938134484,
            "unit": "ns/iter",
            "extra": "iterations: 318489749\ncpu: 2.185795599970786 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.4874185602738526,
            "unit": "ns/iter",
            "extra": "iterations: 281643721\ncpu: 2.4873275126201007 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.4944637369935982,
            "unit": "ns/iter",
            "extra": "iterations: 281494394\ncpu: 2.494408268748685 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.4877526679083197,
            "unit": "ns/iter",
            "extra": "iterations: 281280280\ncpu: 2.4877131237212926 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.4874571505222107,
            "unit": "ns/iter",
            "extra": "iterations: 281503139\ncpu: 2.4874288133604066 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 3.4175372137806868,
            "unit": "ns/iter",
            "extra": "iterations: 204771992\ncpu: 3.41748302179919 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 3.4177140742820535,
            "unit": "ns/iter",
            "extra": "iterations: 204863971\ncpu: 3.417682062796687 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 12.622460225700127,
            "unit": "ns/iter",
            "extra": "iterations: 55753527\ncpu: 12.622353559802589 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 74.41840393351549,
            "unit": "ns/iter",
            "extra": "iterations: 9402077\ncpu: 74.41642256280181 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 7.149267225087155,
            "unit": "ns/iter",
            "extra": "iterations: 97989026\ncpu: 7.149096920302076 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 4.042360766348631,
            "unit": "ns/iter",
            "extra": "iterations: 173301657\ncpu: 4.042187386586853 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 458.49012177123495,
            "unit": "ns/iter",
            "extra": "iterations: 1502243\ncpu: 458.4745949889602 ns\nthreads: 1"
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
        "date": 1737486185893,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.194235315840875,
            "unit": "ns/iter",
            "extra": "iterations: 319959420\ncpu: 2.1942442919792766 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.1825978991499246,
            "unit": "ns/iter",
            "extra": "iterations: 319833855\ncpu: 2.1825739429617297 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.184421511302428,
            "unit": "ns/iter",
            "extra": "iterations: 320360909\ncpu: 2.1843215022217346 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.182549310510896,
            "unit": "ns/iter",
            "extra": "iterations: 320666218\ncpu: 2.1824503914534574 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.4945166441004765,
            "unit": "ns/iter",
            "extra": "iterations: 280004258\ncpu: 2.4944452166152424 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.3546644417980045,
            "unit": "ns/iter",
            "extra": "iterations: 281965422\ncpu: 2.3545937380931785 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.1994800945677357,
            "unit": "ns/iter",
            "extra": "iterations: 317632765\ncpu: 2.199511602652202 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.2636781939163,
            "unit": "ns/iter",
            "extra": "iterations: 308264949\ncpu: 2.2636201788870904 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.4872874561192453,
            "unit": "ns/iter",
            "extra": "iterations: 281274388\ncpu: 2.487267365416862 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.4892375291691278,
            "unit": "ns/iter",
            "extra": "iterations: 281352586\ncpu: 2.4891855765633544 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 12.667135735154774,
            "unit": "ns/iter",
            "extra": "iterations: 55050241\ncpu: 12.667314371975234 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 73.51968352488157,
            "unit": "ns/iter",
            "extra": "iterations: 9529975\ncpu: 73.51825130706008 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 6.235138746307688,
            "unit": "ns/iter",
            "extra": "iterations: 112679575\ncpu: 6.234850140320473 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.7994404559025163,
            "unit": "ns/iter",
            "extra": "iterations: 239379882\ncpu: 2.799343359188394 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 459.8113273473712,
            "unit": "ns/iter",
            "extra": "iterations: 1522563\ncpu: 459.7863149176758 ns\nthreads: 1"
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
        "date": 1737491111809,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.258452925090921,
            "unit": "ns/iter",
            "extra": "iterations: 319345726\ncpu: 2.2582953153410923 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.200908503246521,
            "unit": "ns/iter",
            "extra": "iterations: 318772884\ncpu: 2.200778018496705 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.2008362533214343,
            "unit": "ns/iter",
            "extra": "iterations: 317084062\ncpu: 2.20066676829692 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.2095506856918306,
            "unit": "ns/iter",
            "extra": "iterations: 315868797\ncpu: 2.209486621117566 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.259900101922063,
            "unit": "ns/iter",
            "extra": "iterations: 309795750\ncpu: 2.2599035428988294 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.244387121896975,
            "unit": "ns/iter",
            "extra": "iterations: 311502400\ncpu: 2.244215238791096 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.268741969448036,
            "unit": "ns/iter",
            "extra": "iterations: 306862468\ncpu: 2.268611454953167 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.2476574615552387,
            "unit": "ns/iter",
            "extra": "iterations: 311879620\ncpu: 2.2474803226963 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.4867601929389522,
            "unit": "ns/iter",
            "extra": "iterations: 281214672\ncpu: 2.4864658590786455 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.333774677945727,
            "unit": "ns/iter",
            "extra": "iterations: 281131788\ncpu: 2.3337125078150147 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 13.056683305721776,
            "unit": "ns/iter",
            "extra": "iterations: 53605007\ncpu: 13.056374528595791 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 73.07237453548507,
            "unit": "ns/iter",
            "extra": "iterations: 9595502\ncpu: 73.0714867236753 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.908485871490405,
            "unit": "ns/iter",
            "extra": "iterations: 118642664\ncpu: 5.908140397117171 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.804084030645914,
            "unit": "ns/iter",
            "extra": "iterations: 250251795\ncpu: 2.8039287030888183 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 457.47339877025627,
            "unit": "ns/iter",
            "extra": "iterations: 1510870\ncpu: 457.4575727891875 ns\nthreads: 1"
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
        "date": 1737556632066,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.2050867231326547,
            "unit": "ns/iter",
            "extra": "iterations: 315245819\ncpu: 2.2050462689879486 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.2100882315668424,
            "unit": "ns/iter",
            "extra": "iterations: 318974954\ncpu: 2.210008447873309 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.1978781538054655,
            "unit": "ns/iter",
            "extra": "iterations: 318985703\ncpu: 2.197822778282951 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.194200727383446,
            "unit": "ns/iter",
            "extra": "iterations: 316411647\ncpu: 2.1941152848902554 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.5552775977381,
            "unit": "ns/iter",
            "extra": "iterations: 279768670\ncpu: 2.5551900003670895 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.492076400102254,
            "unit": "ns/iter",
            "extra": "iterations: 281429152\ncpu: 2.491968703370148 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.2425677651340394,
            "unit": "ns/iter",
            "extra": "iterations: 281410644\ncpu: 2.242462662499716 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.357148097311435,
            "unit": "ns/iter",
            "extra": "iterations: 298681776\ncpu: 2.3571028886610086 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 2.486882812300636,
            "unit": "ns/iter",
            "extra": "iterations: 281558066\ncpu: 2.4867588023565994 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.4877530515428172,
            "unit": "ns/iter",
            "extra": "iterations: 281554300\ncpu: 2.4876852173808 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 13.053329939595303,
            "unit": "ns/iter",
            "extra": "iterations: 53643901\ncpu: 13.052399731331997 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 73.97677875287161,
            "unit": "ns/iter",
            "extra": "iterations: 9473393\ncpu: 73.97158050974991 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 7.160430719688381,
            "unit": "ns/iter",
            "extra": "iterations: 97700665\ncpu: 7.159660110808863 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 4.039346444819488,
            "unit": "ns/iter",
            "extra": "iterations: 173034693\ncpu: 4.039103112114058 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 458.01741358677566,
            "unit": "ns/iter",
            "extra": "iterations: 1527428\ncpu: 457.9860543344749 ns\nthreads: 1"
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
        "date": 1737572478420,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.2402313558360953,
            "unit": "ns/iter",
            "extra": "iterations: 314504623\ncpu: 2.2400749161642692 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.2457284637480823,
            "unit": "ns/iter",
            "extra": "iterations: 312002561\ncpu: 2.245557381819055 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.231151469827712,
            "unit": "ns/iter",
            "extra": "iterations: 313003677\ncpu: 2.2311068952713926 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.231166014341916,
            "unit": "ns/iter",
            "extra": "iterations: 313695524\ncpu: 2.2311014102961835 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.499225534538898,
            "unit": "ns/iter",
            "extra": "iterations: 281407643\ncpu: 2.499196903475716 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.4883829145298737,
            "unit": "ns/iter",
            "extra": "iterations: 279746543\ncpu: 2.4882001776872715 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.4859927782479785,
            "unit": "ns/iter",
            "extra": "iterations: 281386564\ncpu: 2.4859391864922147 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.48973811367169,
            "unit": "ns/iter",
            "extra": "iterations: 281479146\ncpu: 2.489659027884077 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 3.2815712726573745,
            "unit": "ns/iter",
            "extra": "iterations: 204759294\ncpu: 3.281469885318125 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 2.2189332617163373,
            "unit": "ns/iter",
            "extra": "iterations: 315694004\ncpu: 2.2187884601064547 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 12.636708373386544,
            "unit": "ns/iter",
            "extra": "iterations: 55367896\ncpu: 12.636271983316828 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 73.27911566584737,
            "unit": "ns/iter",
            "extra": "iterations: 9563082\ncpu: 73.27634982111405 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 6.224290903499836,
            "unit": "ns/iter",
            "extra": "iterations: 112628112\ncpu: 6.2239729455821795 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 4.043955855890035,
            "unit": "ns/iter",
            "extra": "iterations: 173249931\ncpu: 4.0437182569498455 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 456.8279317815521,
            "unit": "ns/iter",
            "extra": "iterations: 1530085\ncpu: 456.82277259106513 ns\nthreads: 1"
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
        "date": 1737572598966,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.199307607881867,
            "unit": "ns/iter",
            "extra": "iterations: 313883989\ncpu: 2.1992323189189493 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 2.1968042504597416,
            "unit": "ns/iter",
            "extra": "iterations: 318416380\ncpu: 2.196700757040201 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 2.197131998395807,
            "unit": "ns/iter",
            "extra": "iterations: 316907912\ncpu: 2.1970814979210744 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 2.222642229197202,
            "unit": "ns/iter",
            "extra": "iterations: 310332677\ncpu: 2.2226151131355087 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.486941810793137,
            "unit": "ns/iter",
            "extra": "iterations: 281022923\ncpu: 2.4868966614513517 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.487411261677186,
            "unit": "ns/iter",
            "extra": "iterations: 281406040\ncpu: 2.4873431288113084 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.4932047878982577,
            "unit": "ns/iter",
            "extra": "iterations: 281651179\ncpu: 2.4931519743434136 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.4881038443075294,
            "unit": "ns/iter",
            "extra": "iterations: 281614127\ncpu: 2.4880993629982213 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 3.419975495537027,
            "unit": "ns/iter",
            "extra": "iterations: 204650883\ncpu: 3.4198670914114766 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 3.4183240475531855,
            "unit": "ns/iter",
            "extra": "iterations: 204749807\ncpu: 3.418286430912243 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 13.058553294204932,
            "unit": "ns/iter",
            "extra": "iterations: 53549865\ncpu: 13.05812186454626 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 73.44419609288495,
            "unit": "ns/iter",
            "extra": "iterations: 9595269\ncpu: 73.43989480649273 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 7.158550399903598,
            "unit": "ns/iter",
            "extra": "iterations: 97922648\ncpu: 7.1577990619698095 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 4.041534228320043,
            "unit": "ns/iter",
            "extra": "iterations: 173106334\ncpu: 4.041261476890842 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 474.83861242869085,
            "unit": "ns/iter",
            "extra": "iterations: 1466476\ncpu: 474.79852858144284 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}