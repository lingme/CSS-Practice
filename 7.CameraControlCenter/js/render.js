Vue.component('button-counter', {
    props: ['id', 'name'],
    template: '<button>{{ name }}</button>'
})

const posts = [];

window.onload = () => {
    for (let index = 0; index < 60; index++) {
        var item = {
            id: index,
            name: index.toString().l
        }
        posts.push(item);
    }
}

new Vue({
    el: '#components-demo',
    data: {
        posts
    }
})