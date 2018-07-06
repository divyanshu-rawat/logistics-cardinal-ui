import Global from './components/Global';
import SingleSelect from './components/Select/SingleSelect';
import MultipleSelect from './components/Select/MultipleSelect';
import TimeSpanDisplay from './components/TimeSpanDisplay';
import Button from './components/Button';
import Grid from './components/Grid';
import ComposedTabs from './components/Tabs';
import Text from './components/Text';
import Indicator from './components/Checkbox/Indicator';
import Prediction from './components/Forecast/Prediction';
import Input from './components/Input';
import MaskedInput from './components/MaskedInput';
import Spacing from './components/Spacing';
import ComposedChart from './components/Graph/ComposedChart';
import Line from './components/Graph/Line';
import Area from './components/Graph/Area';
import LinearGradient from './components/Graph/LinearGradient';
import Heading from './components/Heading';
import Spinner from './components/Spinner';
import Switch from './components/Switch';
import Tooltip from './components/Tooltip';
import Responsive from './components/Responsive';
import * as MASKS from './components/MaskedInput/constants';
import Themes from './themes';

export default {
  SingleSelect,
  MultipleSelect,
  ComposedTabs,
  TimeSpanDisplay,
  Prediction,
  Button,
  Global,
  Themes,
  Indicator,
  Text,
  Input,
  MaskedInput,
  Spinner,
  Spacing,
  Heading,
  MASKS,
  ComposedChart,
  Line,
  Area,
  LinearGradient,
  Tooltip,
  Switch,
  Responsive,
  ...Grid,
};
