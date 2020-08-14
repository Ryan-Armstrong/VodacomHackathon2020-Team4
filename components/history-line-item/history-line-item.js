Component({
  props: {
    purchased: 'R5 airti2me',
    date:'23 Aug 2018, 06:08 AM',
    fee:"1",
    totalRepayment:"6",
    onClickMe: () => {},
  },

  methods: {
    onClickMe() {
      this.props.onClickMe();
    },
  },
});
