import { Router } from "./router.js";

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/o-universo", "/pages/o-universo.html")
router.add("/exploracao", "/pages/exploracao.html")
router.add("/error", "/pages/error.html")

router.handle()

window.onpopstate = () => router.handle()
window.Route = () => router.Route()