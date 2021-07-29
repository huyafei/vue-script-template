const template=`
<div class="ven-layout">
  <VenHeader></VenHeader>
  <VenMenu></VenMenu>
  <div class="ven-container">
    <router-view></router-view>
  </div>
 
</div>
`;
export default {
  template,
  data(){
    return{

    }
  }
}
