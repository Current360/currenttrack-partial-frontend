<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
    class="pt-0">
    <!-- CLIENT INFO DIALOG -->
    <v-dialog
      v-model="clientInfoDialog"
      max-width="80vw">
      <v-card>
        <v-card-title class="headline">{{ clicked.name }}</v-card-title>
        <v-layout
          row
          wrap>
          <v-flex
            xs12
            md3>
            <v-card-text>ID: {{ clicked.id }}</v-card-text>
          </v-flex>
          <v-flex
            xs12
            md3>
            <v-card-text>AE: {{ clicked.ae }}</v-card-text>
          </v-flex>
          <v-flex
            xs12
            md3>
            <v-card-text>AC: {{ clicked.ac }}</v-card-text>
          </v-flex>
        </v-layout>
        <v-card-actions>
          <v-spacer/>
          <v-tooltip top>
            <v-btn
              slot="activator"
              class="mb-2"
              fab
              icon
              round
              color="blue">
              <v-icon>mdi-chart-bar</v-icon>
            </v-btn>
            <span>See Analytics</span>
          </v-tooltip>
          <v-tooltip top>
            <v-btn
              slot="activator"
              class="ml-2 mb-2"
              fab
              icon
              round
              color="indigo">
              <v-icon>mdi-file</v-icon>
            </v-btn>
            <span>Create Report</span>
          </v-tooltip>
          <v-tooltip top>
            <v-btn
              slot="activator"
              class="ml-2 mb-2"
              fab
              icon
              round
              color="info">
              <v-icon>mdi-lead-pencil</v-icon>
            </v-btn>
            <span>Edit</span>
          </v-tooltip>
          <v-tooltip top>
            <v-btn
              slot="activator"
              class="ml-2 mb-2"
              fab
              icon
              round
              color="danger">
              <v-icon>mdi-cancel</v-icon>
            </v-btn>
            <span>Deactivate</span>
          </v-tooltip>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- FILTER DIALOG -->
    <v-dialog
      v-model="filterDialog"
      max-width="40vw">
      <v-card>
        <v-card-title class="headline">Filters</v-card-title>
        <v-layout
          row
          wrap
          class="justify-center">
          <v-flex shrink>
            <v-btn color="grey">Active</v-btn>
          </v-flex>
          <v-flex shrink>
            <v-btn
              class="ml-2"
              color="grey">Sleeping</v-btn>
          </v-flex>
          <v-flex shrink>
            <v-btn
              class="ml-2"
              color="grey">Recent</v-btn>
          </v-flex>
          <v-flex shrink>
            <v-btn
              class="ml-2"
              color="grey">2020</v-btn>
          </v-flex>
        </v-layout>
        <v-card-actions>
          <v-spacer/>
          <v-btn
            flat="flat"
            color="red darken-1"
            @click="filterDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- CLIENT LIST START -->
    <v-layout
      justify-center
      wrap>
      <v-flex>
        <!-- TOP ACTION BAR -->
        <v-layout
          row
          wrap
          class="justify-space-between">
          <v-flex>
            <v-btn
              color="green mr-3"
              href="/add-client">
              <v-icon left>mdi-plus</v-icon>Add new
            </v-btn>
            <v-btn
              color="blue darken-4"
              @click.stop="openFilterDialog">
              <v-icon left>mdi-filter</v-icon>FILTER
            </v-btn>
            <v-btn
              small
              round
              color="grey"
              class="ml-2">
              active
              <v-icon
                right
                small>mdi-close</v-icon>
            </v-btn>
            <v-btn
              small
              round
              color="grey"
              class="ml-2">
              filter 2
              <v-icon
                right
                small>mdi-close</v-icon>
            </v-btn>
            <v-btn
              small
              round
              color="grey"
              class="ml-2">
              filter 3
              <v-icon
                right
                small>mdi-close</v-icon>
            </v-btn>
          </v-flex>
          <v-flex shrink>
            <v-btn color="blue darken-4">
              <v-icon left>mdi-chart-bar</v-icon>ANALYTICS
            </v-btn>
          </v-flex>
        </v-layout>

        <!-- LIST CONTAINER -->
        <material-card>
          <!-- SEARCH -->
          <v-layout row>
            <v-flex
              xs12
              md3
              class="pt-0">
              <v-text-field
                v-model="search"
                class="purple-input"
                label="Search..."
                single-line
                hide-details
                color="purple"
              />
            </v-flex>
          </v-layout>
          <!-- LIST -->
          <v-data-table
            :headers="headers"
            :items="items"
            :search="search"
            hide-actions>
            <template
              slot="headerCell"
              slot-scope="{ header }">
              <span
                class="subheading font-weight-light blue--text text--darken-4"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ item }">
              <td
                class="clickable"
                @click.stop="openClienInfoDialog(item)">{{ item.name }}</td>
              <td class="hidden-sm-and-down">{{ item.id }}</td>
              <td class="hidden-sm-and-down">{{ item.ae }}</td>
              <td class="hidden-sm-and-down">{{ item.ac }}</td>
              <td class="text-xs-right">
                <v-tooltip top>
                  <v-btn
                    slot="activator"
                    fab
                    icon
                    round
                    color="blue darken-4">
                    <v-icon>mdi-chart-bar</v-icon>
                  </v-btn>
                  <span>See Analytics</span>
                </v-tooltip>
                <v-tooltip top>
                  <v-btn
                    slot="activator"
                    fab
                    icon
                    round
                    color="blue darken-2">
                    <v-icon>mdi-file</v-icon>
                  </v-btn>
                  <span>Create Report</span>
                </v-tooltip>
                <v-tooltip top>
                  <v-btn
                    slot="activator"
                    fab
                    icon
                    round
                    color="blue">
                    <v-icon>mdi-lead-pencil</v-icon>
                  </v-btn>
                  <span>Edit</span>
                </v-tooltip>
                <v-tooltip top>
                  <v-btn
                    slot="activator"
                    fab
                    icon
                    round
                    color="danger">
                    <v-icon>mdi-cancel</v-icon>
                  </v-btn>
                  <span>Deactivate</span>
                </v-tooltip>
              </td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    clientInfoDialog: null,
    filterDialog: null,
    search: '',
    clicked: {},
    headers: [
      {
        sortable: true,
        text: 'Name',
        value: 'name'
      },
      {
        sortable: false,
        text: 'ID',
        value: 'id'
      },
      {
        sortable: true,
        text: 'AE',
        value: 'ae'
      },
      {
        sortable: true,
        text: 'AC',
        value: 'ac'
      },
      {
        sortable: false,
        text: '',
        value: '',
        align: 'right'
      }
    ],
    items: [
      {
        name: '25 Again',
        id: '233',
        ae: 'Rick',
        ac: 'Summer'
      },
      {
        name: 'Archdiocese of Louisville',
        id: '123',
        ae: 'Kati',
        ac: 'Summer'
      },
      {
        name: 'Baptist Healthcare System',
        id: '645',
        ae: 'Rick',
        ac: 'Jena'
      },
      {
        name: 'Blue Halo MedSpa',
        id: '665',
        ae: 'Kati',
        ac: 'Jena'
      },
      {
        name: 'Botanical Processing',
        id: '345',
        ae: 'Rick',
        ac: 'Summer'
      },
      {
        name: 'BsideU',
        id: '967',
        ae: 'Kati',
        ac: 'Jena'
      },
      {
        name: 'Clark Memorial Hospital',
        id: '286',
        ae: 'Rick',
        ac: 'Summer'
      },
      {
        name: 'Commonwealth Bank & Trust',
        id: '290',
        ae: 'Rick',
        ac: 'Jena'
      },
      {
        name: 'Cumberland Security Bank',
        id: '876',
        ae: 'Nick',
        ac: 'Summer'
      },
      {
        name: 'Current360',
        id: '256',
        ae: 'Rick',
        ac: 'Jena'
      }
    ]
  }),
  methods: {
    openClienInfoDialog (item) {
      this.clientInfoDialog = true
      this.clicked = item
    },
    openFilterDialog () {
      this.filterDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
.clickable {
  &:hover {
    cursor: pointer;
  }
}
</style>
