Vue.component('button-counter', {
    props: ['id', 'name', 'status'],
    template: '<button class="btn">{{ name }}{{ status }}</button>'
})

const posts = [];

function PrefixZero(num, n) {
    return (Array(n).join(0) + num).slice(-n);
}

window.onload = () => {
    for (let index = 1; index <= 60; index++) {
        posts.push({
            id: index,
            name: "主机" + PrefixZero(index, 2),
            status: Math.floor(Math.random() * 100) % 4
        });
    }
}

new Vue({
    el: '#components-demo',
    data: {
        posts
    }
})