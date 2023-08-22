# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "@hotwired--stimulus.js" # @3.2.2
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin "tailwindcss-stimulus-components" # @4.0.1
pin "trix"
pin "@rails/actiontext", to: "actiontext.js"
pin "axios", to: "https://ga.jspm.io/npm:axios@0.26.1/index.js"
pin "process", to: "https://ga.jspm.io/npm:@jspm/core@2.0.1/nodelibs/browser/process-production.js"
pin "amplitude", to: "https://ga.jspm.io/npm:amplitude@6.0.0/entry.js"
pin "#lib/adapters/http.js", to: "https://ga.jspm.io/npm:axios@0.26.1/lib/adapters/xhr.js"
pin "amplitudejs", to: "https://ga.jspm.io/npm:amplitudejs@5.3.2/dist/amplitude.js"
