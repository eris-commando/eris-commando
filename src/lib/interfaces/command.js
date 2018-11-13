module.exports = class Command {
    /**
     * The command interface. Start. Here.
     * 
     * Properties:
     *  - `bot: CommandoClient` - The bot client
     *  - `meta: (type) CommandMeta` - The command meta (object)
     * 
     * @param {import('../client')} bot The bot client
     * @param {CommandMeta} meta The command meta
     */
    constructor(bot, meta) {
        this.bot = bot;
        this.command = meta.command;
        this.description = meta.description;
        this.usage = meta.usage || '';
        this.category = meta.category || 'Core';
        this.aliases = meta.aliases || [];
        this.hidden = meta.hidden || false;
        this.disabled = meta.disabled || false;
        this.owner = meta.owner || false;
        this.nsfw = meta.nsfw || false;
        this.guild = meta.guild || false;
    }

    /**
     * Run the command
     * 
     * @param {import('./message')} msg The command message
     * @returns {Promise<void>}
     */
    async run(msg) {}

    /**
     * Create the 'usage' string
     * 
     * @private
     * @returns {string}
     */
    usage() {
        if (this.meta.usage)
            return `${this.bot.prefix}${this.meta.command} ${this.meta.usage}`;
        else
            return `${this.bot.prefix}${this.meta.command}`;
    }
};

/**
 * @typedef {Object} CommandMeta
 * @prop {string} command The command name
 * @prop {string} description The command description
 * @prop {string} usage The command usage
 * @prop {string} category The category name 
 * @prop {string[]} [aliases=[]] The command alias(es)
 * @prop {number} [cooldown=3] The command cooldown
 * @prop {boolean} [hidden=false] Whenther or not the command should be hidden from the help command
 * @prop {boolean} [disabled=false] Whenther or not the command shouldn't be in the Command collection
 * @prop {boolean} [owner=false] Whenther or not the command should be executed by the owners
 * @prop {boolean} [nsfw=false] Whenther or not the command should be executed in nsfw channels
 * @prop {boolean} [guild=false] Whenther or not the command should be handled in DM's or not.
 */