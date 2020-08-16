Component({
  props: {
    repayment: '5',
    date:'23 Aug 2018, 06:08 AM',
    onClickMe: () => {},
  },

  methods: {
    onClickMe() {
      this.props.onClickMe();
    },
  },
});
