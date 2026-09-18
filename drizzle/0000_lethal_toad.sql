CREATE TABLE `pathwayLeads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`firstName` varchar(120) NOT NULL,
	`email` varchar(320) NOT NULL,
	`organization` varchar(180),
	`persona` varchar(48) NOT NULL,
	`destination` varchar(72) NOT NULL,
	`stage` varchar(72) NOT NULL,
	`recommendedRoute` varchar(72) NOT NULL,
	`consentToContact` boolean NOT NULL DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `pathwayLeads_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`openId` varchar(64) NOT NULL,
	`name` text,
	`email` varchar(320),
	`loginMethod` varchar(64),
	`role` enum('user','admin') NOT NULL DEFAULT 'user',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`lastSignedIn` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_openId_unique` UNIQUE(`openId`)
);
