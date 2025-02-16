import { DeconstructedSnowflake, Snowflake, SnowflakeGenerateOptions } from './Snowflake';

/**
 * A class for parsing snowflake ids using Discord's snowflake epoch
 *
 * Which is 2015-01-01 at 00:00:00.000 UTC+0, {@linkplain https://discord.com/developers/docs/reference#snowflakes}
 */
export class DiscordSnowflake extends Snowflake {
	public constructor() {
		super(DiscordSnowflake.Epoch);
	}

	/**
	 * Discord epoch (`2015-01-01T00:00:00.000Z`)
	 * @see {@linkplain https://discord.com/developers/docs/reference#snowflakes}
	 */
	public static readonly Epoch = 1420070400000n;

	/**
	 * Deconstructs a snowflake given a snowflake ID
	 * @param id the snowflake to deconstruct
	 * @returns a deconstructed snowflake
	 * @example
	 * ```typescript
	 * const snowflake = DiscordSnowflake.decode('3971046231244935168');
	 * ```
	 */
	// eslint-disable-next-line @typescript-eslint/unbound-method
	public static decode = DiscordSnowflake.deconstruct;

	/**
	 * Deconstructs a snowflake given a snowflake ID
	 * @param id the snowflake to deconstruct
	 * @returns a deconstructed snowflake
	 * @example
	 * ```typescript
	 * const snowflake = DiscordSnowflake.deconstruct('3971046231244935168');
	 * ```
	 */
	public static deconstruct(id: string | bigint): DeconstructedSnowflake {
		return new DiscordSnowflake().deconstruct(id);
	}

	/**
	 * Generates a snowflake given an epoch and optionally a timestamp
	 * @param options {@link SnowflakeGenerateOptions} to pass into the generator
	 *
	 * **note** when increment is not provided it defaults to `0n`
	 * @example
	 * ```typescript
	 * const snowflake = DiscordSnowflake.generate();
	 * ```
	 * @returns A unique snowflake
	 */
	public static generate(options: SnowflakeGenerateOptions = { timestamp: Date.now() }) {
		return new DiscordSnowflake().generate(options);
	}
}
