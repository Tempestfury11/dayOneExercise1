const app = Vue.createApp({
    template:` <div v-if='isVisible' id='box1'>
    <p>{{name}} {{age}}</p>
    </div>
    <input type='text' v-model= 'name'/>
     <input type='text' v-model= 'age'/>
    <button v-on:click='display'>Click Me</button>`
    ,
data:function(){
    return{
        name:'marshalino',
        age: 24,
        isVisible:true
    }
},
methods:{
    display() {
        if(parseInt(this.age) > 17){
            this.isVisible = true;
            console.log('identity');
        }else{
            this.isVisible = false;
        }
    }
}
});
app.mount('#app');