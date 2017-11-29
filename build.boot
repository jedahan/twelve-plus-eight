(set-env!
 :source-paths #{"src"}
 :resource-paths #{"html" "js"}

 :dependencies '[
                 [org.clojure/clojurescript "1.9.946"]
                 [pandeiro/boot-http "0.8.3"]
                 [quil "2.6.0"]

                 [org.clojure/clojure "1.8.0" :scope "test"]
                 [adzerk/boot-cljs "2.1.4" :scope "test"]
                 [adzerk/boot-cljs-repl   "0.3.3" :scope "test"]
                 [adzerk/boot-reload "0.5.2" :scope "test"]
                 [com.cemerick/piggieback "0.2.2" :scope "test"]
                 [weasel "0.7.0" :scope "test"]
                 [org.clojure/tools.nrepl "0.2.13" :scope "test"]])

(require '[adzerk.boot-cljs :refer [cljs]]
         '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
         '[adzerk.boot-reload :refer [reload]]
         '[pandeiro.boot-http :refer [serve]])

(deftask run
  "The `run` task wraps the building of your application in some
   useful tools for local development: an http server, a file watcher
   a ClojureScript REPL and a hot reloading mechanism"
  []
  (comp (serve)
        (watch)
        (cljs-repl)

        (reload)
        (cljs)))

(deftask production []
  (task-options! cljs {:optimizations :advanced})
  identity)

(deftask development []
  (task-options! cljs {:optimizations :none}
                 reload {:on-jsload 'twelve-plus-eight.core/twelve-plus-eight})
  identity)

(deftask dev
  "Simple alias to run application in development mode"
  []
  (comp (development)
        (run)))

(deftask prod
  "Simple alias to run application in production mode"
  [d dir PATH #{str} "the set of directories to write to (target)."]
  (let [dir (if (seq dir) dir #{"target"})]
    (comp (production)
       (cljs)
       (target :dir dir)))
  )
