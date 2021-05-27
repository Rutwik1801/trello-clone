import React, { Component }  from 'react';
// import { v4 as uuid } from 'uuid';
const cards=[
    {
        id: 'card-1',
        title:'Lorem ipsum dolor sit amet consectetur adipisicing  voluptatum  quisquam.',
        designation:'react developer',
        name:'Toshi Bisht'
    },
    {
        id: 'card-2',
        title:'Lorem ipsum dolor sit amet consectetur  consequuntur voluptatum  quisquam.',
        designation:'actor',
        name:'Yui Man'
    },
    {
        id: 'card-3',
        title:'Lorem ipsum dolor sit amet consectetur adipisicing  blanditiis harum quisquam.',
        designation:'writer',
        name:'Craig Dan'
    }
];

const data= {
    lists:{
        'list-1':{
            id:'list-1',
            title:'todo',
            cards,
        },
        'list-2':{
            id:'list-2',
            title:'manage',
            cards:[],
        }
    },
    listIds:['list-1','list-2']
};
export default data;