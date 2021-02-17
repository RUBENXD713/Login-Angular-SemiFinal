import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent implements OnInit {
  creadores = [
  {name:'Nayeli Guadalupe Esquivel Luna',description:'hola',correo:'19170139@uttcampus.edu.mx',face:'https://www.facebook.com/nayeli.esquivel.543',git:null,foto:'https://scontent.ftrc2-1.fna.fbcdn.net/v/t1.0-9/79762714_1599297563552666_8586284011532320768_o.jpg?_nc_cat=108&ccb=3&_nc_sid=174925&_nc_eui2=AeHS8Qgmoa0MM7lS7284Fw2T6mdGF7OOrfHqZ0YXs46t8fbNfbFD2n5nPQ-uCZpGucEnc4_gMk1RQsCpP7kLs-eh&_nc_ohc=KaZLsITOe-8AX9HU5a0&_nc_ht=scontent.ftrc2-1.fna&oh=8545d698dd6c16089b1ad39ab424477b&oe=6052483B'},
  {name:'Ruben Hernandez Barraza',description:'Me gusta mucho pasar tiempo con mis amigos, tanto como practicar deporte, una de mis principales fortalezas es la programacion, y busco ser alguien muy bueno en este mundo de desarro de software.',correo:'19170045@uttcampus.edu.mx',face:'https://www.facebook.com/ruben.barraza.3766',git:'https://github.com/RUBENXD713',foto:'https://instagram.ftrc2-1.fna.fbcdn.net/v/t51.2885-15/e35/27575867_238656280007908_526365847195746304_n.jpg?_nc_ht=instagram.ftrc2-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=w7iMkaNGVVYAX8mM65A&tp=1&oh=72099df755d1b874de1bb75528a062f4&oe=6056CF40'},
  {name:'Angelica Marisol Garcia Gonzales',description:'Soy muy creativa, me gustan los grandes retos, el diseño web  y las innovaciones tecnologícas, soy estudiante de TSU en Tecnologías de la Información área Desarrollo de Software Multiplataforma, mi fortaleza es  el diseño.',correo:'19170157@uttcampus.edu.mx',face:'https://www.facebook.com/profile.php?id=100009431625712',git:null,foto:'https://scontent.ftrc2-1.fna.fbcdn.net/v/t1.0-9/71672223_2448816288776068_9112016832088244224_o.jpg?_nc_cat=109&ccb=3&_nc_sid=174925&_nc_eui2=AeEkATRqFpXBN-9sTsUn-nKllu33RQ46igiW7fdFDjqKCJxD_P2w6JWs3X5soJmmzRQyhGSDhtYVLg3FbGJfjqBc&_nc_ohc=FigrWX9C1BUAX81szX9&_nc_ht=scontent.ftrc2-1.fna&oh=b1ec85639e355aaf3766126fac15e165&oe=6052D97F'},
  {name:'Dulce Jazmin Antunez Rios',description:'Me gusta la lectura y la tecnología, principalmente en el desarrollo de IoT. Estudiante de TSU en Tecnologías de la Información área Desarrollo de Software Multiplataforma, mi fortaleza son las bases de datos.',correo:'19170118@uttcampus.edu.mx',face:'https://www.facebook.com/DulceJazminAntunezMD',git:null,foto:'https://scontent.ftrc2-1.fna.fbcdn.net/v/t1.0-1/p200x200/135833277_2745542978996148_8231841048610591008_o.jpg?_nc_cat=109&ccb=3&_nc_sid=7206a8&_nc_eui2=AeH9oPjhCG5DdMVRfYCOOJdsmG4T_CnVUjqYbhP8KdVSOmNNlTOw332NQZMzaNQJzZMwT1NbYN8GdsCmK4jMBfAh&_nc_ohc=IGZJCq-TAbUAX9ACHO0&_nc_ht=scontent.ftrc2-1.fna&tp=6&oh=2fc7496456cf68d7b2c1055ab658d560&oe=6052CE8D'},
  {name:'Cesar Daniel Caldera Luna',description:'hola',correo:'19170159@uttcampus.edu.mx',face:'https://www.facebook.com/profile.php?id=100018332143769',git:null,foto:'https://scontent.ftrc2-1.fna.fbcdn.net/v/t1.0-9/97565271_587908735163526_4992418483917553664_n.jpg?_nc_cat=103&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeH7r71Ox7KT_44kLxzSQBBE7mhqxm2U82zuaGrGbZTzbNyh6yB5eUi47XnhJvCYt-XfkWoUDpJ8pEYoqdKdZtq3&_nc_ohc=DM1pimts4cgAX_ZYsj4&_nc_ht=scontent.ftrc2-1.fna&oh=a60699cf0eee56843abaa4cfdb8874c3&oe=60518D04'}]
  constructor() { }

  ngOnInit(): void {
  }

}
