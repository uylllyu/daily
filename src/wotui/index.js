import { Lazyload, ImgPreview, Loading, InfiniteLoad, Popup, Swipe, SwipeItem } from 'wot-design'

const UIComponents = [Lazyload, ImgPreview, Loading, InfiniteLoad, Popup, Swipe, SwipeItem]


const WotUIPlugin = {};

WotUIPlugin.install = function (Vue) {

    UIComponents.forEach(Component => {

        Vue.use(Component)

    })

}

export default WotUIPlugin