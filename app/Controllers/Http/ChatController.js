'use strict'

/**
 * Resourceful controller for interacting with chats
 */
class ChatController {
  /**
   * Show a list of all chats.
   * GET chats
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new chat.
   * GET chats/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new chat.
   * POST chats
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single chat.
   * GET chats/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing chat.
   * GET chats/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update chat details.
   * PUT or PATCH chats/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a chat with id.
   * DELETE chats/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ChatController
