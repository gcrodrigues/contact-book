import { Request, Response, response } from "express";
import db from "../database/connection";

export default class ContactController {
  async index(req: Request, res: Response) {
    const filters = req.query;
    if (!filters.search) {
      const contacts = await db("contacts").select(
        "contacts.name",
        "contacts.phone",
        "contacts.id"
      );

      return res.status(200).json(contacts);
    }

    const contacts = await db("contacts").where(
      "contacts.name",
      "like",
      filters.search as string
    );

    return res.status(200).json(contacts);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const contact = await db("contacts").where("contacts.id", "=", id);

    return res.status(200).json(contact);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, work, phone, email } = req.body;

    await db("contacts")
      .where("contacts.id", "=", id)
      .update({ name: name, work: work, phone: phone, email: email });

    return res.status(200).send();
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await db("contacts").where("contacts.id", "=", id).del();

    return res.status(200).send();
  }

  async create(req: Request, res: Response) {
    const { name, work, phone, email } = req.body;

    await db("contacts").insert({
      name,
      work,
      phone,
      email,
    });

    return res.status(200).send();
  }
}
