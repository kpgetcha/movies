import * as express from 'express'
import { isNumber, isBoolean, isDate, isString } from 'util';

export default abstract class BaseController {

  public readonly PROPERTY : string = 'property';
  public readonly VALUE : string = 'value';

  /**
   * This is what we will call on the route handler.
   * We also make sure to catch any uncaught errors in the
   * implementation.
   */

  public static jsonResponse (
    res: express.Response, code: number, message: string
  ) {
    return res.status(code).json({ message })
  }

  protected convertMapToObj(map: Map<string, string>) : any {
    let obj = Object.create(null);
    for (let [k,v] of map) {
      // We don’t escape the key '__proto__'
      // which can cause problems on older engines
      obj[k] = v;
    }
    return obj;
  }

  public ok<T> (res: express.Response, dto?: T) {
    if (!!dto) {
      res.type('application/json');
      return res.status(200).json(dto);
    } else {
      return res.sendStatus(200);
    }
  }

  public created (res: express.Response) {
    return res.sendStatus(201);
  }

  public notFound (res: express.Response, message?: string) {
    return BaseController.jsonResponse(res, 404, message ? message : 'Not found');
  }

  public fail (res: express.Response, error: Error | string) {
    return res.status(500).json({
      message: error.toString()
    })
  }

  public badRequest(res: express.Response, message?: string) {
    res.status(400).json({
      message: message
    })
  }
}