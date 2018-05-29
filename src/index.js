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
  ...Grid,
};
