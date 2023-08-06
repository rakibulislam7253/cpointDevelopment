<template>
    <div class="form-group ">
        <label>Domain Assign</label>
        <select @change="onChange($event)" v-model="addDomain" id="addDomain" class="form-control form-control-sm select2"
            style="width: 100%;">

            <option value="Alabama" selected="selected">Alabama</option>
            <option value="Alaska">Alaska</option>
            <option value="California">California</option>
            <option value="Delaware">Delaware</option>
            <option value="Tennessee">Tennessee</option>
            <option value="Texas">Texas</option>
            <option value="Washington">Washington</option>

        </select>
        <p>show data : {{ datashow }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
          
            datashow: "",
        };
    },
    methods: {
        onChange(e) {
            console.log(e.target.value);
            this.datashow = e.target.value
        },
    }

}
</script>