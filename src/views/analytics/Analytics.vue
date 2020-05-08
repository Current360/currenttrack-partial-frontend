<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
    class="pt-0"
  >
    <!-- CLIENT INFO DIALOG -->
    <v-dialog
      v-model="clientInfoDialog"
      max-width="80vw"
    >
      <v-card>
        <v-card-title class="headline mb-5">
          {{ clicked.name }}
        </v-card-title>
        <v-layout class="justify-center">
          <v-flex
            xs12
            md3
          >
            <v-card-text>ID: {{ clicked.id }}</v-card-text>
          </v-flex>
          <v-flex
            xs12
            md3
          >
            <v-card-text>AE: {{ clicked.ae }}</v-card-text>
          </v-flex>
          <v-flex
            xs12
            md3
          >
            <v-card-text>AC: {{ clicked.ac }}</v-card-text>
          </v-flex>
        </v-layout>
        <v-card-actions>
          <v-spacer />
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn
                class="mb-2"
                fab
                icon
                rounded
                color="blue"
                v-on="on"
              >
                <v-icon>mdi-chart-bar</v-icon>
              </v-btn>
            </template>
            <span>See Analytics</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn
                class="ml-2 mb-2"
                fab
                icon
                rounded
                color="indigo"
                v-on="on"
              >
                <v-icon>mdi-file</v-icon>
              </v-btn>
            </template>
            <span>Create Report</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn
                class="ml-2 mb-2"
                fab
                icon
                rounded
                color="info"
                v-on="on"
              >
                <v-icon>mdi-lead-pencil</v-icon>
              </v-btn>
            </template>
            <span>Edit</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn
                class="ml-2 mb-2"
                fab
                icon
                rounded
                color="danger"
                v-on="on"
              >
                <v-icon>mdi-cancel</v-icon>
              </v-btn>
            </template>
            <span>Deactivate</span>
          </v-tooltip>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- FILTER DIALOG -->
    <v-dialog
      v-model="filterDialog"
      max-width="40vw"
    >
      <v-card>
        <v-card-title class="headline mb-5">
          Filters
        </v-card-title>
        <v-layout class="justify-center">
          <v-btn color="grey">
            Active
          </v-btn>
          <v-btn
            class="ml-2"
            color="grey"
          >
            Sleeping
          </v-btn>
          <v-btn
            class="ml-2"
            color="grey"
          >
            Recent
          </v-btn>
          <v-btn
            class="ml-2"
            color="grey"
          >
            2020
          </v-btn>
        </v-layout>
        <v-card-actions>
          <v-spacer />
          <v-btn
            flat="flat"
            color="red darken-1"
            @click="filterDialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- CLIENT LIST START -->
    <v-layout
      justify-center
      wrap
    >
      <v-flex>
        <!-- TOP ACTION BAR -->
        <v-layout
          row
          wrap
          class="justify-space-between"
        >
          <v-flex>
            <v-btn
              color="green mr-3"
              href="/clients/add"
            >
              <v-icon left>
                mdi-plus
              </v-icon>Add new
            </v-btn>
            <v-btn
              color="blue darken-4"
              @click.stop="openFilterDialog"
            >
              <v-icon left>
                mdi-filter
              </v-icon>FILTER
            </v-btn>
            <v-btn
              small
              rounded
              color="grey"
              class="ml-2"
            >
              active
              <v-icon
                right
                small
              >
                mdi-close
              </v-icon>
            </v-btn>
            <v-btn
              small
              rounded
              color="grey"
              class="ml-2"
            >
              filter 2
              <v-icon
                right
                small
              >
                mdi-close
              </v-icon>
            </v-btn>
            <v-btn
              small
              rounded
              color="grey"
              class="ml-2"
            >
              filter 3
              <v-icon
                right
                small
              >
                mdi-close
              </v-icon>
            </v-btn>
          </v-flex>
          <v-flex shrink>
            <v-btn color="blue darken-4">
              <v-icon left>
                mdi-chart-bar
              </v-icon>ANALYTICS
            </v-btn>
          </v-flex>
        </v-layout>

        <!-- LIST CONTAINER -->
        <v-card class="px-5 py-3">
          <!-- SEARCH -->
          <v-layout row>
            <v-flex
              xs12
              md3
              class="pt-0"
            >
              <v-text-field
                v-model="search"
                class="purple-input"
                append-icon="mdi-magnify"
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
          >
            <template v-slot:item.name="{item}">
              <spam class="clickable" @click.stop="openClienInfoDialog(item)">
                {{ item.name }}
              </spam>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn
                    fab
                    icon
                    rounded
                    color="blue darken-4"
                    v-on="on"
                    @click="seeAnalytics(item)"
                  >
                    <v-icon>mdi-chart-bar</v-icon>
                  </v-btn>
                </template>
                <span>See Analytics</span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn
                    fab
                    icon
                    rounded
                    color="blue darken-2"
                    v-on="on"
                    @click="createReport(item)"
                  >
                    <v-icon>mdi-file</v-icon>
                  </v-btn>
                </template>
                <span>Create Report</span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn
                    fab
                    icon
                    rounded
                    color="blue"
                    v-on="on"
                    @click="editItem(item)"
                  >
                    <v-icon>mdi-lead-pencil</v-icon>
                  </v-btn>
                </template>
                <span>Edit</span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn
                    fab
                    icon
                    rounded
                    color="danger"
                    v-on="on"
                    @click="deactivateItem(item)"
                  >
                    <v-icon>mdi-cancel</v-icon>
                  </v-btn>
                </template>
                <span>Deactivate</span>
              </v-tooltip>
            </template>
          </v-data-table>
        </v-card>
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
        value: 'actions',
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
    },
    seeAnalytics (item) {},
    createReport (item) {},
    editItem (item) {},
    deactivateItem (item) {}
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
