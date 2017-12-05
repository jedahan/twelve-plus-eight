(set-env!
 :source-paths #{"src"}
 :resource-paths #{"html"}

 :dependencies '[
                 [org.clojure/core.async "RELEASE"]
                 [org.clojure/clojurescript "RELEASE"]
                 [pandeiro/boot-http "RELEASE"]                     ; to serve clojurescript and html
                 [quil "RELEASE"]

                 [org.clojure/clojure "RELEASE" :scope "test"]
                 [adzerk/boot-cljs "RELEASE" :scope "test"]         ; build cljs
                 [adzerk/boot-cljs-repl "RELEASE" :scope "test"]    ; connect repl to browser
                 [adzerk/boot-reload "RELEASE" :scope "test"]       ; reload on build
                 [com.cemerick/piggieback "RELEASE" :scope "test"]  ; needed for boot-reload
                 [weasel "RELEASE" :scope "test"]                   ; needed for boot-reload
                 [org.clojure/tools.nrepl "RELEASE" :scope "test"]] ; needed for cljs-repl
)

(require '[adzerk.boot-cljs :refer [cljs]]
         '[adzerk.boot-cljs-repl :refer [cljs-repl]]
         '[adzerk.boot-reload :refer [reload]]
         '[pandeiro.boot-http :refer [serve]])

(deftask develop
  "Serve up live-reloading site on localhost:3000 with notifications"
  []
  (comp (serve)
        (watch)
        (cljs-repl)
        (cljs :optimizations :none :source-map true)
        (reload :on-jsload 'twelve-plus-eight.sketch/twelve-plus-eight)
        (notify :audible true :visible true)
        (target :dir #{"target"})
        ))

(deftask build
  "Build optimized version of code to :directories (default `target/`)"
  [d directories PATH #{str} "the set of directories to write to (target)."]
  (let [dir (if (seq directories) directories #{"target"})]
    (comp
       (cljs :optimizations :advanced :source-map true)
       (target :dir dir)))
  )

(deftask github-pages
  "Build a production version to github-pages `docs/` directory"
  []
  (comp (build :directories ["docs/"])))
