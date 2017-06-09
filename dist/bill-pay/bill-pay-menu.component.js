"use strict";

window.billPayMenuComponent = Vue.extend({

    template: "\n\n     <nav>\n            <ul>\n                <li v-for=\" o in menus\">\n                    <a v-link=\"{name: o.routeName}\">{{ o.name }}</a>\n                </li>\n            </ul>\n        </nav>\n\n    ",

    data: function data() {

        return {

            menus: [
            // {id: 0, name: "Listar Contar", url: '/bills'},
            // {id: 1, name: "Criar Conta", url: '/bill/create'}

            { id: 0, name: "Listar Conta", routeName: 'bill-pay.list' }, { id: 1, name: "Criar Conta", routeName: 'bill-pay.create' }]

        };
    }
});