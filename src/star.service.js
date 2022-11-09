import { httpService } from './http.service';

export const starService = {
  query,
};

function query() {
  try {
    return httpService.get(`star-info`);
  } catch (err) {
    console.log(err);
  }
}
