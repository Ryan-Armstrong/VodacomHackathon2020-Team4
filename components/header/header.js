Component({
  props: {
    titleLabel: 'Button',
    subtitleLabel:"Subtitle",
    titleValue:"Value1",
    subtitleValue:"Value2",
    onButtonClicked: () => {},
  },
  methods: {
    onClickMe() {
      this.props.onClickMe();
    },
  },
});
