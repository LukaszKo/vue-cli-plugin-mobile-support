import breakpoints from './breakpointsConfig';

const CONSTANTS = {
  ONLY_NUMBERS: /^\d+$/
};

export default {
  data: () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }),
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.widthResizeHandler);
      window.addEventListener('resize', this.heightResizeHandler);
    });
  },
  destroyed() {
    window.removeEventListener('resize', this.widthResizeHandler);
    window.removeEventListener('resize', this.heightResizeHandler);
  },
  computed: {
    breakpoints() {
      return {
        xs: this._parseBreakpoint(breakpoints.xs, 'xs'),
        sm: this._parseBreakpoint(breakpoints.sm, 'sm'),
        md: this._parseBreakpoint(breakpoints.md, 'md'),
        lg: this._parseBreakpoint(breakpoints.lg, 'lg'),
        xl: this._parseBreakpoint(breakpoints.lg, 'xl')
      }
    },
    windowHeight() {
      return this.height;
    },
    windowWidth() {
      return this.width;
    },
    xs() {
      return this.windowWidth < this.breakpoints.xs;
    },
    sm() {
      return this.windowWidth >= this.breakpoints.xs && this.windowWidth < this.breakpoints.sm;
    },
    md() {
      return this.windowWidth >= this.breakpoints.sm && this.windowWidth < this.breakpoints.md;
    },
    lg() {
      return this.windowWidth >= this.breakpoints.md && this.windowWidth < this.breakpoints.lg;
    },
    xl() {
      return this.windowWidth > this.breakpoints.lg
    }
  },
  methods: {
    _parseBreakpoint(breakpoint, type) {
      if (typeof breakpoint === 'string') {
        const stringIsCorrect = breakpoint.match(CONSTANTS.ONLY_NUMBERS);
        if (!stringIsCorrect) {
          throw `Breakpoint ${type} value should contains only numbers`;
        }
        return breakpoint;
      }
      return breakpoint;
    },
    widthResizeHandler() {
      this.width = document.documentElement.clientWidth;
    },
    heightResizeHandler() {
      this.height = document.documentElement.clientHeight;
    }
  }
};