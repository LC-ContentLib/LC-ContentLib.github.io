---
title: Game Events
description: Learn about the game events provided by ContentLib.
sidebar:
  order: 10
draft: true
---

The foundation of ContentLib lies in its **IGameEvent** functionality. The API aims to encapsulate as much of the core
gameplay of **Lethal Company** into a set of predefined events.

These events act as packaged representations of in-game
occurrences, providing mod developers with key information about what happened, when, and where, without altering the
game's core functionality.

---

### **How Events Work**

Each event is represented as an object that contains properties detailing the specifics of the event. For example, an
`EnemySpawnEvent` might include:

- An `IEnemy` property that represents the enemy that spawned.
- A `Vector3` property indicating the in-game location of the spawn.

These events provide mod developers with a way to respond to gameplay occurrences by influencing behavior, rather than
modifying the game's original logic.

#### **Encapsulation Without Modification**

The design of these events ensures that they:

- **Do Not Alter Core Functionality:** Events are purely informational and encapsulate game logic rather than modifying
  it
- **Empower Developers:** By packaging game logic into events, ContentLib allows developers to create mods that react
  to gameplay scenarios without needing to interact directly with the game's internal systems.

---

### **Event Scope and Behavior**

ContentLib events are designed to trigger exclusively on the **host machine**. However, the events themselves may
originate from actions performed by other clients. For instance:

- If a client picks up a torch, the `ItemPickUpEvent` will still trigger on the host.
- This ensures consistency and centralization of event handling for mods.

All **RPC** logic needed for synchronization is managed internally by the ContentLib modules.
Mod developers do not need to handle this complexity, enabling them to focus solely on implementing desired behaviors in
their mods.

---

### **Future of Custom Events**

Currently, the API does not support the creation of custom events. However, this functionality is planned for future
updates. Once implemented, custom events will allow mod developers to define new types of in-game occurrences and
trigger behaviors tailored to their specific modding needs.

---

### **Example: ItemActivationEvent**

Here’s an example of how an event like `ItemActivationEvent` is structured:

```csharp
/// <summary>
/// Interface representing the general functionality of a game event that involves an IGameItem instance.
/// </summary>
public interface IItemEvent : IGameEvent
{
    /// <summary>
    /// The current position of the event.
    /// </summary>
    Vector3 Position { get; }
    /// <summary>
    /// The item involved in the event.
    /// </summary>
    IGameItem? Item { get; }
}


public abstract class ItemActivationEvent : IItemEvent
{
  
    /// <inheritdoc/>
    public abstract Vector3 Position { get; }
    
    /// <inheritdoc/>
    public abstract IGameItem? Item { get; }
    
    /// <inheritdoc />
    public bool IsCancelled { get; set; }
}
```

#### **Behind the Scenes**

The `ItemActivationEvent` is triggered by the ContentLib API when the game detects an item has been activated. The API
encapsulates this
occurrence, including details like the item instance (`IGameItem`) and the location it occurred, into an event object.
This
event is then passed to any mod that has subscribed to it.

---

### **Simplifying Mod Development**

By centralizing event handling and managing all RPC synchronization internally, ContentLib ensures a smooth and
streamlined experience for mod developers. They no longer need to worry about:

- Handling game state directly.
- Managing network synchronization across clients.
- Maintaining compatibility with future game updates.

Instead, developers can focus entirely on their mod's functionality, using events to tailor gameplay in creative and
impactful ways.


