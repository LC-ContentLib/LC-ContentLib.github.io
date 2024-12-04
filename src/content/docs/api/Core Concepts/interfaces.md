---
title: Interfaces
description: Learn about the game events provided by ContentLib.
sidebar:
  order: 9
draft: true
---

### Why Interface-Based APIs Are a Game-Changer for Modding

One of the major challenges in modding for **Lethal Company** is dealing with frequent game updates. These updates often
necessitate refactoring mod code to align with changes in the underlying APIs, leading to a frustrating and
time-consuming process for mod developers. **ContentLib** addresses this issue through its interface-based design, which
shifts the burden of maintenance from individual modders to the API maintainers.

---

### Interface-Based Design: A Proven Solution

ContentLib adopts an interface-centric approach for its API. Instead of exposing game-specific classes directly to mod
developers, ContentLib provides interfaces, such as `IPlayer`, `IGameItem`, and `IEnemy`. This approach mirrors the
design of other successful APIs like Spigot and PaperMC for Minecraft. However, while Minecraft's Java-based APIs
typically avoid the `IExampleInterface` naming convention, ContentLib explicitly uses it to emphasize the
interface-driven design.

This distinction clarifies the role of interfaces as contracts. Developers interact with these contracts rather than the
underlying implementation, ensuring greater stability and forward compatibility.

---

### Example: Handling Item Activation

Let’s revisit an example from the **overview article**:

```csharp
[EventDelegate]
private void OnItemActivation(ItemActivationEvent itemActivationEvent)
{
    IGameItem item = itemActivationEvent.Item;
    if (item is IRemoteControlScrap && item.Owner is IPlayer player)
    {
        player.TeleportToShip();
    }
}
```

This mod listens for an `ItemActivationEvent` and reacts when a specific item is activated. The event relies on the
`IPlayer` and `IGameItem` interfaces, not on direct references to the game's internal classes. These interfaces abstract
away the game's underlying implementation, providing a consistent API for mod developers.

Now consider the underlying implementation in the ContentLib Item Module:

```csharp
private static void GrabbableObjectOnActivateItemServerRpc(On.GrabbableObject.orig_ActivateItemServerRpc orig, GrabbableObject self, bool onoff, bool buttondown)
{
    var isServerCall = IsServerCall(self);
    orig(self, onoff, buttondown);
    if (!isServerCall)
        return;

    ItemActivationEvent activationEvent = new BaseItemActivationEvent(
        ItemManager.Instance.GetItem(self.NetworkObjectId)
    );
    GameEventManager.Instance.Trigger(activationEvent);
}
```

This method triggers an `ItemActivationEvent` whenever an item is activated. If a game update changes the implementation
of `ActivateItemServerRpc`, the ContentLib maintainers would need to update the patching logic to construct the
`BaseItemActivationEvent` differently. However, the `ItemActivationEvent` itself and the interfaces it relies on remain
unchanged, keeping mod developers' code intact.

---

### Reduced Maintenance for Mod Developers

The interface-driven design ensures that:

1. **API Stability:** Interfaces, by their nature, are independent of the underlying game code. Even if the internal
   implementation changes, the methods exposed to mod developers remain the same.

2. **Centralized Maintenance:** ContentLib maintainers handle changes to the game's internal systems. Mod developers are
   insulated from these changes, significantly reducing the need for refactoring.

3. **Community Contributions:** Developers can contribute small fixes to ContentLib's update patches rather than
   modifying their individual mods. This shared responsibility fosters a collaborative development environment and
   reduces the overall workload.

---

### Enhanced Modding Flexibility

The interface-based approach also opens up new possibilities for Unity-based modding workflows. For instance, developers
can create reusable components like ScriptableObjects that implement ContentLib interfaces. These ScriptableObjects can
then seamlessly integrate with the ContentLib API.

#### Example: Custom Enemy AI

Consider the ```IEnemy``` interface below:

```csharp
using ContentLib.API.Model.Entity;

public interface IEnemy : IGameEntity
{

    /// <summary>
    /// Checks if the Enemy is currently spawned or not.
    /// </summary>
    bool IsSpawned { get; }
    
    /// <summary>
    /// Check to see if the Enemy has the ability to exhibit hostile behaviour towards Players. 
    /// </summary>
    bool IsHostile { get; }
    
    /// <summary>
    /// Check of if the Enemy is currently chasing another IEntity.
    /// </summary>
    bool IsChasing { get; }
}

```

If a custom `EnemyAI` script implements the `IEnemy` interface, you would need to adhere to the various methods of the
interface:

```csharp
public class CustomEnemyAI : MonoBehaviour, IEnemy
{
    public bool IsHostile => //Custom Logic Here    
}
```

Because the `CustomEnemyAI` script adheres to the `IEnemy` methods, it both conceptually, and practically can be
registered within the ContentLib API without additional modifications. This compatibility ensures a modular and
scalable approach to adding custom content.

---

### A Collaborative Modding Ecosystem

By leveraging an interface-based design, ContentLib has the potential to transform developer work flow for base-game
updates. Instead of individual developers shouldering the burden of maintaining their mods after every game update, 
the workload is distributed:

- **ContentLib Maintainers** handle changes to the underlying game implementation.
- **Mod Developers** do not have to do full refactors of their mods every time updates occur.
- **Community Contributions** allow developers to collectively address API updates, fostering a collaborative ecosystem.

This model not only reduces the headaches associated with game updates but also encourages innovation and collaboration
within the modding community, leading the continued development, and utility, of the API.