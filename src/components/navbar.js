const template=`
<div class="ven-navbar">
  <div class="ven-navbar__left" @click="leftClickEvent($event)">
    <slot name="left">
      <i class="ven-navbar__icon iconfont icon-left"></i>
      <span class="ven-navbar__text">{{leftText}}</span>
    </slot>
  </div>
  <div class="ven-navbar__title">
    <slot name="title">
         <span>{{title}}</span>
    </slot>
  </div>
  <div class="ven-navbar_right" @click="rightClckEvent($event)">
    <slot name="right">
      <span class="ven-navbar__text">{{rightText}}</span>
    </slot>
  </div>
</div>
`;

export default {
  name:"Navbar",
  template,
  props:{
    leftText:{
      type:String,
      default:""
    },
    title:{
      type:String,
      default:""
    },
    rightText:{
      type:String,
      default:""
    },
  },
  data(){
    return{

    }
  },
  methods:{
    leftClickEvent(event){
      console.log(event)
      console.log(this)
      this.$emit("click-left")
    },
    rightClckEvent(event){
      console.log(event)
      this.$emit("click-right")
    }
  }

}
