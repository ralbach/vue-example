<template>
            <div id="todoItem">
                <li v-bind:key="todo.id"><span>{{todo.text}}</span></li>
            </div>
</template>

<script>

export default {
    name: "todo",
    props:['todo']
   
};

</script>

<style scoped>

#todoItem {
    display: flex;
    background-color: blue;
    border: 5px dotted green;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    
}
</style>