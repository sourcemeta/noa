window.BENCHMARK_DATA = {
  "lastUpdate": 1737462435106,
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
      }
    ]
  }
}