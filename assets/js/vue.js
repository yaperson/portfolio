// data
const products = [
    { id: 1, description: "Quarz Luxe", price: 12, img: 'assets/img/quarz-luxe.JPG'},
    { id: 2, description: 'Curren Business', price: 20, img: 'assets/img/curren-business.JPG'},
    { id: 3, description: 'Curren Sport', price: 5, img: 'assets/img/curren-sport.JPG'},
    { id: 4, description: 'Jaragar Racing', price: 8, img: 'assets/img/jaragar-racing.JPG'},
    { id: 5, description: 'Liges Hommes', price: 3, img: 'assets/img/liges-hommes.JPG'},
    { id: 6, description: 'Maserati Mechanical', price: 65, img: 'assets/img/maserati-mechanical.JPG'},
    { id: 7, description: 'Montre Mecanique', price: 25, img: 'assets/img/montre-mecanique.JPG'},
    { id: 8, description: 'Brand Designer', price: 28, img: 'assets/img/brand-designer.JPG'},
    { id: 9, description: 'Relogio Masculino', price: 4, img: 'assets/img/relogio-masculino.JPG'},
    { id: 10, description: 'Tissot Multifunction', price: 29, img: 'assets/img/tissot-multifunction.JPG'},
    { id: 11, description: 'Hip Hop Gold', price: 87, img: 'assets/img/hiphop-gold.JPG'},
    { id: 12, description: 'Mesh Genova', price: 6, img: 'assets/img/mesh-genova.JPG'},
  ];


Vue.component('fiche-produit',{
    template: `
    <div class="card">
    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
      <img
        src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
        class="img-fluid"
      />
      <a href="#!">
        <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
      </a>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ nom }}</h5>
      <p class="card-text">
        {{ desc }}
      </p>
      <a href="#!" class="btn btn-primary">Button</a>
        <button class="btn btn-primary" v-on:click="$emit(\'remove\')">Supprimer</button>\
      </div>
  </div>

        `,
    props: ['nom', 'desc'],
})

var app = new Vue ({
    el: "#app",
    data: {
      newObjectText: '',
      newObjectDesc: '',
      object: [
        {
          id: 1,
          produits: 'stagg',
          description: 'parfait pour débuter',
        }
      ] ,
      nextObjectId: 2,
      affichage: "display-1"
    },
    methods: {
    addNewObject: function () {
      this.object.push({
        id: this.nextObjectId++,
        produits    : this.newObjectText,
        description : this.newObjectDesc
      })
      this.newObjectText = '',
      this.newObjectDesc = ''
    }
  }
})