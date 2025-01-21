window.BENCHMARK_DATA = {
  "lastUpdate": 1737461799931,
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
      }
    ]
  }
}