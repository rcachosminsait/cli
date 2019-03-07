<template lang="pug">
div
  ods-sub-header(
    :is-absolute="true"
    :stretch="false"
    cssClass="my-class")
    ods-input.ods-mr-12(
      size="deci"
      class="m-b-10"
      placeholder="Search"
      v-model="input")
      i(
        slot="prefix"
        class="ods-input__icon ods-icon-search")
    ods-radio(
      v-model="radio"
      label="1") Option A
    ods-radio(
      v-model="radio"
      label="2") Option B
  h1.ods-mb-12 Home - Dummy content
  ods-row.flex-container.wrap(:gutter="20")
    ods-col.ods-mb-4(
      :xs="24"
      :md="8")
      ods-module
        div.flex-container.space-between.align-center(slot="header")
          span Module Title
          ods-button(type="text")
            | Link Button
            ods-icon(name="arrow-right" size="16")
        p Content of module
    ods-col.ods-mb-4(
      :xs="24"
      :md="8")
      ods-module
        div.flex-container.space-between.align-center(slot="header")
          span Module Title
          ods-button(type="text")
            | Link Button
            ods-icon(name="arrow-right" size="16")
        p Content of module
    ods-col.ods-mb-4(
      :xs="24"
      :md="8")
      ods-module
        div.flex-container.space-between.align-center(slot="header")
          span Module Title
          ods-button(type="text")
            | Link Button
            ods-icon(name="arrow-right" size="16")
        p Content of module
  ods-row.flex-container.wrap.ods-mt-6(:gutter="20")
    ods-col.ods-mb-4(
      :xs="24"
      :md="12")
      ods-module
        ods-table(
          highlight-current-row
          :data="tableData3"
          height="250"
          style="width: 100%")
          ods-table-column(
            prop="date"
            label="Fecha"
            width="180")
          ods-table-column(
            prop="name"
            label="Nombre"
            width="180")
          ods-table-column(
            prop="address"
            label="Dirección")
    ods-col.ods-mb-4(
      :xs="24"
      :md="12")
      ods-module
        ods-table(
          :data="tableData3"
          height="250"
          style="width: 100%")
          ods-table-column(
            prop="date"
            label="Fecha"
            width="180")
          ods-table-column(
            prop="name"
            label="Nombre"
            width="180")
          ods-table-column(
            prop="address"
            label="Dirección")
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      input: '',
      radio: '',
      tableData3: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-08',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-06',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-07',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }]
    }
  }
}
</script>
