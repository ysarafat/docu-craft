---
title: "Introduction"
date: "2025-07-05"
parent: null
order: 1
author: "Yeasir Arafat"
category: "General"
tags: ["intro", "getting-started"]
---

## API Documentation

Use the Protocol API to access contacts, conversations, group messages, and more and seamlessly integrate your product into the workflows of dozens of devoted Protocol users.

## Getting Started

To get started, create a new application in your [developer settings](/dev-settings), then read about how to make requests for the resources you need to access using our HTTP APIs or dedicated client SDKs.

When your integration is ready to go live, publish it to our [integrations directory](/integrations) to reach the Protocol community.

## Authentication

All requests to the Protocol API must be authenticated using an API key. You can generate one from your [API Keys page](/dev-settings/api-keys).

### Example

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" https://api.protocol.io/v1/contacts
```
