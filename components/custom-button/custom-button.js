Component({
  props: {
    text: 'Button',
    outline:false,
    style:'',
    onClickMe: () => {},
  },

  methods: {
    onClickMe() {
      this.props.onClickMe();
    },
  },
});
