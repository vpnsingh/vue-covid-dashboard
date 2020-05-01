import Home from '../components/home'
import Worldwide from '../components/worldwide'
import India from '../components/india'
import ViewChart from '../components/vuecharts'

export default[
    { path: '/', redirect: '/home'},
    { path: '/home', component: Home },
    { path: '/worldwide', component: Worldwide },
    { path: '/india', component: India },
    { path: '/view-chart-daily', component: ViewChart },
]