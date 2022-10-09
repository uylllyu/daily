import { Lazyload, ImgPreview, Loading, InfiniteLoad,Popup } from 'wot-design'

const UIComponents = [Lazyload, ImgPreview, Loading, InfiniteLoad,Popup]


const WotUIPlugin = {};

WotUIPlugin.install = function (Vue) {

    UIComponents.forEach(Component => {

        Vue.use(Component)

    })

}

export default WotUIPlugin