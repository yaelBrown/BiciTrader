import axios from 'axios'

import api_endpoints from '../Api/api_endpoints'

class TestService {
  getTestData = () => axios.get(api_endpoints.test)
}

export default new TestService();