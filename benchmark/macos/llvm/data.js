window.BENCHMARK_DATA = {
  "lastUpdate": 1737486240297,
  "repoUrl": "https://github.com/sourcemeta/noa",
  "entries": {
    "Benchmark (macos/llvm)": [
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
        "date": 1737417056377,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.6342241356513354,
            "unit": "ns/iter",
            "extra": "iterations: 437185773\ncpu: 1.6340810797610281 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.6444827960331194,
            "unit": "ns/iter",
            "extra": "iterations: 445933722\ncpu: 1.6442353736145554 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.7729042569305817,
            "unit": "ns/iter",
            "extra": "iterations: 432395036\ncpu: 1.7513290786252227 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.6480258527166285,
            "unit": "ns/iter",
            "extra": "iterations: 400130328\ncpu: 1.6458412520032737 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 1.9761425536927495,
            "unit": "ns/iter",
            "extra": "iterations: 361284728\ncpu: 1.975591395604188 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.9100433364697305,
            "unit": "ns/iter",
            "extra": "iterations: 353337271\ncpu: 1.9099711674628301 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.9642150967815455,
            "unit": "ns/iter",
            "extra": "iterations: 355837514\ncpu: 1.963986292912334 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.0171159571282944,
            "unit": "ns/iter",
            "extra": "iterations: 354021686\ncpu: 2.016723913348067 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.6237020689051995,
            "unit": "ns/iter",
            "extra": "iterations: 424113905\ncpu: 1.623568555244614 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.639764058064854,
            "unit": "ns/iter",
            "extra": "iterations: 431486162\ncpu: 1.638407119994733 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.790700275699684,
            "unit": "ns/iter",
            "extra": "iterations: 106423413\ncpu: 6.788863273911363 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 69.86100868516178,
            "unit": "ns/iter",
            "extra": "iterations: 9944312\ncpu: 69.8565169717119 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.132296042674192,
            "unit": "ns/iter",
            "extra": "iterations: 138331719\ncpu: 5.13172253718614 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.27228296618518,
            "unit": "ns/iter",
            "extra": "iterations: 310880369\ncpu: 2.2721022954009706 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 741.1128093669796,
            "unit": "ns/iter",
            "extra": "iterations: 968510\ncpu: 740.5447543133275 ns\nthreads: 1"
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
        "date": 1737461783298,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 2.1613355528349345,
            "unit": "ns/iter",
            "extra": "iterations: 387742893\ncpu: 1.829059959069321 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.8203141308055346,
            "unit": "ns/iter",
            "extra": "iterations: 430763929\ncpu: 1.7887105863035253 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.776516712184736,
            "unit": "ns/iter",
            "extra": "iterations: 389081268\ncpu: 1.7523331398210618 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.8211154046509643,
            "unit": "ns/iter",
            "extra": "iterations: 413240217\ncpu: 1.7611257812305325 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.055050341677715,
            "unit": "ns/iter",
            "extra": "iterations: 318633699\ncpu: 2.049566640470126 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.1025940102433758,
            "unit": "ns/iter",
            "extra": "iterations: 341010951\ncpu: 2.0921263610680936 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.3644871934788876,
            "unit": "ns/iter",
            "extra": "iterations: 291914794\ncpu: 2.3417038603394684 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.2039351285845634,
            "unit": "ns/iter",
            "extra": "iterations: 337730260\ncpu: 2.1954295715166285 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.712355339624902,
            "unit": "ns/iter",
            "extra": "iterations: 414056631\ncpu: 1.703967397638416 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.7962039767050868,
            "unit": "ns/iter",
            "extra": "iterations: 414358100\ncpu: 1.7906202388706782 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 7.865350987203323,
            "unit": "ns/iter",
            "extra": "iterations: 81016643\ncpu: 7.78691854709408 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 91.86976058957794,
            "unit": "ns/iter",
            "extra": "iterations: 7828314\ncpu: 89.56692335028967 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 6.380678172081946,
            "unit": "ns/iter",
            "extra": "iterations: 127379263\ncpu: 6.333417080612253 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.925197335620526,
            "unit": "ns/iter",
            "extra": "iterations: 266496109\ncpu: 2.6989174539880425 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 838.7161760142388,
            "unit": "ns/iter",
            "extra": "iterations: 747576\ncpu: 835.7103491818878 ns\nthreads: 1"
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
        "date": 1737462441836,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.8752420380891062,
            "unit": "ns/iter",
            "extra": "iterations: 390056893\ncpu: 1.8144019826359026 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.8178500248843243,
            "unit": "ns/iter",
            "extra": "iterations: 405787692\ncpu: 1.8170881338608946 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.8229569007201638,
            "unit": "ns/iter",
            "extra": "iterations: 387551835\ncpu: 1.8204171320721518 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.8053544466862317,
            "unit": "ns/iter",
            "extra": "iterations: 368051064\ncpu: 1.8016440240477056 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.184712024171407,
            "unit": "ns/iter",
            "extra": "iterations: 297287885\ncpu: 2.183059023747303 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.1172510296971447,
            "unit": "ns/iter",
            "extra": "iterations: 337560882\ncpu: 2.1143474793978068 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.1355098649037396,
            "unit": "ns/iter",
            "extra": "iterations: 319172704\ncpu: 2.129593137137441 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.0918474191751066,
            "unit": "ns/iter",
            "extra": "iterations: 343228109\ncpu: 2.087652442242137 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.7268241408885658,
            "unit": "ns/iter",
            "extra": "iterations: 396358036\ncpu: 1.7224124099757105 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.667496240137591,
            "unit": "ns/iter",
            "extra": "iterations: 414051733\ncpu: 1.6653619464503002 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 7.200309844525892,
            "unit": "ns/iter",
            "extra": "iterations: 98201509\ncpu: 7.190307024711809 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 73.0923213005878,
            "unit": "ns/iter",
            "extra": "iterations: 9801725\ncpu: 72.86605163886959 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.79889091457857,
            "unit": "ns/iter",
            "extra": "iterations: 117938436\ncpu: 5.4870915873430715 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.5466980665876306,
            "unit": "ns/iter",
            "extra": "iterations: 282513238\ncpu: 2.4132072706624816 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 842.022701058501,
            "unit": "ns/iter",
            "extra": "iterations: 824499\ncpu: 818.4752194969313 ns\nthreads: 1"
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
        "date": 1737462595685,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.808263987772316,
            "unit": "ns/iter",
            "extra": "iterations: 402414487\ncpu: 1.8047784646480687 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.8209684971904692,
            "unit": "ns/iter",
            "extra": "iterations: 350383670\ncpu: 1.8187833925022825 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.7139531422661494,
            "unit": "ns/iter",
            "extra": "iterations: 396632027\ncpu: 1.7131924649140855 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.7570360681187283,
            "unit": "ns/iter",
            "extra": "iterations: 407735322\ncpu: 1.7463363156945242 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.1934910654555133,
            "unit": "ns/iter",
            "extra": "iterations: 352172907\ncpu: 2.125901752005015 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.030008622852563,
            "unit": "ns/iter",
            "extra": "iterations: 306376572\ncpu: 2.028448180430716 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.3713348603886284,
            "unit": "ns/iter",
            "extra": "iterations: 345824173\ncpu: 2.365456390464641 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.123476045611269,
            "unit": "ns/iter",
            "extra": "iterations: 332910062\ncpu: 2.120779996130006 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.8692545570966617,
            "unit": "ns/iter",
            "extra": "iterations: 400964606\ncpu: 1.866703416710055 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.739416724939505,
            "unit": "ns/iter",
            "extra": "iterations: 370370370\ncpu: 1.7376309017376332 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 7.507913681552029,
            "unit": "ns/iter",
            "extra": "iterations: 94830389\ncpu: 7.457261405940235 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 84.71603563257868,
            "unit": "ns/iter",
            "extra": "iterations: 9241656\ncpu: 77.69062168078972 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 6.390106306102707,
            "unit": "ns/iter",
            "extra": "iterations: 117309916\ncpu: 5.617743345754338 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.440262887318877,
            "unit": "ns/iter",
            "extra": "iterations: 287031114\ncpu: 2.434837081808484 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 782.607271651902,
            "unit": "ns/iter",
            "extra": "iterations: 852131\ncpu: 779.4482303777214 ns\nthreads: 1"
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
        "date": 1737474702335,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.8728419112405885,
            "unit": "ns/iter",
            "extra": "iterations: 379751642\ncpu: 1.872110404199384 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.7634043591575,
            "unit": "ns/iter",
            "extra": "iterations: 401548831\ncpu: 1.76215430197579 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.8342900877454247,
            "unit": "ns/iter",
            "extra": "iterations: 391054899\ncpu: 1.831111186258274 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.8401782257640555,
            "unit": "ns/iter",
            "extra": "iterations: 405226261\ncpu: 1.8398610153254586 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.1266801521224425,
            "unit": "ns/iter",
            "extra": "iterations: 333915300\ncpu: 2.12607808027964 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.8054209939714134,
            "unit": "ns/iter",
            "extra": "iterations: 318226659\ncpu: 2.727574750423409 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.5010568934347397,
            "unit": "ns/iter",
            "extra": "iterations: 309757814\ncpu: 2.499846541401537 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.7088402385288815,
            "unit": "ns/iter",
            "extra": "iterations: 198424431\ncpu: 2.7053876243696973 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.9934432102156592,
            "unit": "ns/iter",
            "extra": "iterations: 386727512\ncpu: 1.9888939269466848 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.8503034649444816,
            "unit": "ns/iter",
            "extra": "iterations: 374473731\ncpu: 1.8477798112893544 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 8.721726142985133,
            "unit": "ns/iter",
            "extra": "iterations: 80246701\ncpu: 8.67489867278158 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 89.96801864549694,
            "unit": "ns/iter",
            "extra": "iterations: 6333753\ncpu: 86.06161307521747 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 8.340964325439154,
            "unit": "ns/iter",
            "extra": "iterations: 125691302\ncpu: 7.352998857470664 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 3.743879441794212,
            "unit": "ns/iter",
            "extra": "iterations: 192413414\ncpu: 3.7409969764374034 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 1271.6113718183497,
            "unit": "ns/iter",
            "extra": "iterations: 602208\ncpu: 1270.7170944258457 ns\nthreads: 1"
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
        "date": 1737482926902,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.9568783091996835,
            "unit": "ns/iter",
            "extra": "iterations: 357611766\ncpu: 1.9012042238006233 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.7032848757753571,
            "unit": "ns/iter",
            "extra": "iterations: 391621537\ncpu: 1.6735698578293454 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.7074585268162055,
            "unit": "ns/iter",
            "extra": "iterations: 409296886\ncpu: 1.6680312588549715 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.759442982064118,
            "unit": "ns/iter",
            "extra": "iterations: 424476529\ncpu: 1.7025181620819367 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.045431356689006,
            "unit": "ns/iter",
            "extra": "iterations: 344710419\ncpu: 1.9927567086389704 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 2.2344907806218677,
            "unit": "ns/iter",
            "extra": "iterations: 347422128\ncpu: 2.0366779861529123 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 2.1371246065497367,
            "unit": "ns/iter",
            "extra": "iterations: 339693693\ncpu: 2.013890790724807 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 2.120753393882868,
            "unit": "ns/iter",
            "extra": "iterations: 348860969\ncpu: 2.0851315126628585 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.7368944103416055,
            "unit": "ns/iter",
            "extra": "iterations: 423418682\ncpu: 1.7357028190834511 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.7310273642966363,
            "unit": "ns/iter",
            "extra": "iterations: 403653642\ncpu: 1.7273100684670626 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 7.315559794012834,
            "unit": "ns/iter",
            "extra": "iterations: 102289831\ncpu: 7.124461863662686 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 76.62407279810803,
            "unit": "ns/iter",
            "extra": "iterations: 9194195\ncpu: 76.55319470600756 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.620249505655134,
            "unit": "ns/iter",
            "extra": "iterations: 128367351\ncpu: 5.611481380495276 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.401562983781489,
            "unit": "ns/iter",
            "extra": "iterations: 290830529\ncpu: 2.3826075012915866 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 781.5435870497784,
            "unit": "ns/iter",
            "extra": "iterations: 896631\ncpu: 777.8907934256118 ns\nthreads: 1"
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
        "date": 1737486238793,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "Regex_Lower_S_Or_Upper_S_Asterisk",
            "value": 1.6982860921271823,
            "unit": "ns/iter",
            "extra": "iterations: 378480670\ncpu: 1.6957801305942517 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Lower_S_Or_Upper_S_Asterisk_Dollar",
            "value": 1.681638478072622,
            "unit": "ns/iter",
            "extra": "iterations: 428690412\ncpu: 1.6789225507567451 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Asterisk",
            "value": 1.6430772619638752,
            "unit": "ns/iter",
            "extra": "iterations: 418828119\ncpu: 1.6427430938561207 ns\nthreads: 1"
          },
          {
            "name": "Regex_Group_Period_Asterisk_Group",
            "value": 1.651551376309603,
            "unit": "ns/iter",
            "extra": "iterations: 426899551\ncpu: 1.6512994645899752 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Plus",
            "value": 2.0233067683256403,
            "unit": "ns/iter",
            "extra": "iterations: 345957487\ncpu: 2.0225461979957076 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period",
            "value": 1.9751501486875715,
            "unit": "ns/iter",
            "extra": "iterations: 356520765\ncpu: 1.973957954454629 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Plus_Dollar",
            "value": 1.9925498254343932,
            "unit": "ns/iter",
            "extra": "iterations: 363353231\ncpu: 1.9921468649332035 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Plus_Group_Dollar",
            "value": 1.9455936670739349,
            "unit": "ns/iter",
            "extra": "iterations: 352375008\ncpu: 1.9453848440920105 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Asterisk_Dollar",
            "value": 1.5951517335137346,
            "unit": "ns/iter",
            "extra": "iterations: 435001460\ncpu: 1.5942980972983396 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Group_Period_Asterisk_Group_Dollar",
            "value": 1.6032741981143417,
            "unit": "ns/iter",
            "extra": "iterations: 430377256\ncpu: 1.6022593907704055 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_X_Hyphen",
            "value": 6.662704405163229,
            "unit": "ns/iter",
            "extra": "iterations: 105420099\ncpu: 6.662202053139772 ns\nthreads: 1"
          },
          {
            "name": "Regex_Period_Md_Dollar",
            "value": 68.5887723931448,
            "unit": "ns/iter",
            "extra": "iterations: 10252354\ncpu: 68.5827859631064 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Slash_Period_Asterisk",
            "value": 5.129241917123867,
            "unit": "ns/iter",
            "extra": "iterations: 137206476\ncpu: 5.129043617445576 ns\nthreads: 1"
          },
          {
            "name": "Regex_Caret_Period_Range_Dollar",
            "value": 2.2027543380914953,
            "unit": "ns/iter",
            "extra": "iterations: 304376940\ncpu: 2.2017436669151116 ns\nthreads: 1"
          },
          {
            "name": "Regex_Nested_Backtrack",
            "value": 753.1845987349394,
            "unit": "ns/iter",
            "extra": "iterations: 961908\ncpu: 753.160385400684 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}