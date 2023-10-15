/// <reference path="puerts.d.ts" />
declare module "ue" {
    import {$Ref, $Nullable} from "puerts"

    import * as cpp from "cpp"

    import * as UE from "ue"

// __TYPE_DECL_START: 6526E3EF4B834D5F32578BAFC66A6BA3
    namespace Game.Effects.AnimationNotifies.AN_FootPlant_Left {
        class AN_FootPlant_Left_C extends UE.AnimNotify {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            IsRight: boolean;
            Received_Notify(MeshComp: $Nullable<UE.SkeletalMeshComponent>, Animation: $Nullable<UE.AnimSequenceBase>, EventReference: UE.AnimNotifyEventReference) : boolean;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AN_FootPlant_Left_C;
            static Load(InName: string): AN_FootPlant_Left_C;
        
            __tid_AN_FootPlant_Left_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: D344A87C41C45723D5CF95A01632CD73
    namespace Game.Effects.AnimationNotifies.AN_FootPlant_Right {
        class AN_FootPlant_Right_C extends UE.Game.Effects.AnimationNotifies.AN_FootPlant_Left.AN_FootPlant_Left_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AN_FootPlant_Right_C;
            static Load(InName: string): AN_FootPlant_Right_C;
        
            __tid_AN_FootPlant_Right_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: BF347B014B9AEE53ECFA208461A48949
    namespace Game.Characters.Heroes.Mannequin.Animations.AnimModifiers.FootFXAnimModifier {
        class FootFXAnimModifier_C extends UE.AnimationModifier {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            SampleStep: number;
            FeetDefinitions: TArray<UE.Game.Characters.Heroes.Mannequin.Animations.AnimModifiers.FootFXAnimModifier_FootDefinition.FootFXAnimModifier_FootDefinition>;
            FootUnplantedSpeedThreshold: number;
            FootPlantedSpeedThreshold: number;
            NotifiesToRemove: TArray<string>;
            ApplyModifier(AnimSequence: $Nullable<UE.AnimSequence>) : void;
            ExecuteUbergraph_FootFXAnimModifier(EntryPoint: number) : void;
            /*
             *Executed when the Animation is initialized (native event for debugging _ testing purposes)
             */
            OnApply(AnimationSequence: $Nullable<UE.AnimSequence>) : void;
            OnRevert(AnimationSequence: $Nullable<UE.AnimSequence>) : void;
            ProcessFoot(AnimSequence: $Nullable<UE.AnimSequence>, FootDefinition: UE.Game.Characters.Heroes.Mannequin.Animations.AnimModifiers.FootFXAnimModifier_FootDefinition.FootFXAnimModifier_FootDefinition) : void;
            RevertModifier(AnimSequence: $Nullable<UE.AnimSequence>) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FootFXAnimModifier_C;
            static Load(InName: string): FootFXAnimModifier_C;
        
            __tid_FootFXAnimModifier_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: EAE11E15464C6C11DD896CB62675676E
    namespace Game.Characters.Heroes.Mannequin.Animations.AnimNotifies.TransitionToLocomotion {
        class TransitionToLocomotion_C extends UE.AnimNotifyState {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TransitionToLocomotion_C;
            static Load(InName: string): TransitionToLocomotion_C;
        
            __tid_TransitionToLocomotion_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 78970A9541C2A6F586164FB663E57663
    namespace Game.Characters.Heroes.Mannequin.Animations.AnimModifiers.TurnYawAnimModifier {
        class TurnYawAnimModifier_C extends UE.AnimationModifier {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            RootBoneName: string;
            TurnYawCurveName: string;
            WeightCurveName: string;
            ExecuteUbergraph_TurnYawAnimModifier(EntryPoint: number) : void;
            /*
             *Executed when the Animation is initialized (native event for debugging _ testing purposes)
             */
            OnApply(AnimationSequence: $Nullable<UE.AnimSequence>) : void;
            OnRevert(AnimationSequence: $Nullable<UE.AnimSequence>) : void;
            PopulateCurveKeys(AnimSequence: $Nullable<UE.AnimSequence>, FirstZeroTurnYawFrame: $Ref<number>) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TurnYawAnimModifier_C;
            static Load(InName: string): TurnYawAnimModifier_C;
        
            __tid_TurnYawAnimModifier_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7F12C8724C1563B363BDFA8595DC85D9
    namespace Game.ThirdPerson.Blueprints.BP_ThirdPersonCharacter {
        class BP_ThirdPersonCharacter_C extends UE.TPSCharacter {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            ExecuteUbergraph_BP_ThirdPersonCharacter(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_ThirdPersonCharacter_C;
            static Load(InName: string): BP_ThirdPersonCharacter_C;
        
            __tid_BP_ThirdPersonCharacter_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: B664C7194AC63A927ED4059E8DFC948D
    namespace Game.Characters.Heroes.Mannequin.Animations.AnimEnum_CardinalDirection {
        enum AnimEnum_CardinalDirection { Forward, Backward, Left, Right, AnimEnum_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 32FBE0824D247EDBF071C2ADA816F7E1
    namespace Game.Characters.Heroes.Mannequin.Animations.AnimEnum_RootYawOffsetMode {
        enum AnimEnum_RootYawOffsetMode { BlendOut, Hold, Accumulate, AnimEnum_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 3FF1642C4E91056E822C35B47DADC5D2
    namespace Game.Characters.Heroes.Mannequin.Animations.AnimModifiers.FootFXAnimModifier_FootDefinition {
        class FootFXAnimModifier_FootDefinition {
            constructor();
            constructor(BoneName: string, NotifyTrackName: string, NotifyType: UE.Class);
            BoneName: string;
            NotifyTrackName: string;
            NotifyType: UE.Class;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_FootFXAnimModifier_FootDefinition_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 6D478EA1430342FA4DAC25BBFF4710CE
    namespace Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections {
        class AnimStruct_CardinalDirections {
            constructor();
            constructor(Forward: UE.AnimSequence, Backward: UE.AnimSequence, Left: UE.AnimSequence, Right: UE.AnimSequence);
            Forward: UE.AnimSequence;
            Backward: UE.AnimSequence;
            Left: UE.AnimSequence;
            Right: UE.AnimSequence;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimStruct_CardinalDirections_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 697989F949A9B0FF9A5B4FB163453D2A
    namespace Game.Characters.Heroes.Mannequin.Animations.LinkedLayers.ALI_ItemAnimLayers {
        class ALI_ItemAnimLayers_C extends UE.AnimLayerInterface {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            FullBody_Aiming(PreAimPose: UE.PoseLink, AimYaw: number, AimPitch: number, FullBody_Aiming: $Ref<UE.PoseLink>) : void;
            FullBody_CycleState(FullBody_CycleState: $Ref<UE.PoseLink>) : void;
            FullBody_FallLandState(FullBody_FallLandState: $Ref<UE.PoseLink>) : void;
            FullBody_FallLoopState(FullBody_FallLoopState: $Ref<UE.PoseLink>) : void;
            FullBody_IdleState(FullBody_IdleState: $Ref<UE.PoseLink>) : void;
            FullBody_JumpApexState(FullBody_JumpApexState: $Ref<UE.PoseLink>) : void;
            FullBody_JumpStartLoopState(FullBody_JumpStartLoopState: $Ref<UE.PoseLink>) : void;
            FullBody_JumpStartState(FullBody_JumpStartState: $Ref<UE.PoseLink>) : void;
            FullBody_PivotState(FullBody_PivotState: $Ref<UE.PoseLink>) : void;
            FullBody_SkeletalControls(InPose: UE.PoseLink, FullBody_SkeletalControls: $Ref<UE.PoseLink>) : void;
            FullBody_StartState(FullBody_StartState: $Ref<UE.PoseLink>) : void;
            FullBody_StopState(FullBody_StopState: $Ref<UE.PoseLink>) : void;
            FullBodyAdditives(FullBodyAdditives: $Ref<UE.PoseLink>) : void;
            LeftHandPose_OverrideState(InputPose: UE.PoseLink, LeftHandPose_OverrideState: $Ref<UE.PoseLink>) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ALI_ItemAnimLayers_C;
            static Load(InName: string): ALI_ItemAnimLayers_C;
        
            __tid_ALI_ItemAnimLayers_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: E418627D4F3A708360257FAC7CAD7923
    namespace Game.Characters.Heroes.Mannequin.Animations.ABP_Mannequin_Base {
        class AnimBlueprintGeneratedMutableData extends UE.AnimBlueprintMutableData {
            constructor();
            constructor(__FloatProperty: number, __FloatProperty_0: number, __FloatProperty_1: number);
            __FloatProperty: number;
            __FloatProperty_0: number;
            __FloatProperty_1: number;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedMutableData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: E418627D4F3A708360257FAC7CAD7923
    namespace Game.Characters.Heroes.Mannequin.Animations.ABP_Mannequin_Base {
        class ABP_Mannequin_Base_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            __AnimBlueprintMutables: UE.Game.Characters.Heroes.Mannequin.Animations.ABP_Mannequin_Base.AnimBlueprintGeneratedMutableData;
            AnimBlueprintExtension_Tag: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_NodeRelevancy: UE.AnimSubsystemInstance_NodeRelevancy;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root_14: UE.AnimNode_Root;
            AnimGraphNode_LinkedInputPose_2: UE.AnimNode_LinkedInputPose;
            AnimGraphNode_Root_13: UE.AnimNode_Root;
            AnimGraphNode_LinkedInputPose_1: UE.AnimNode_LinkedInputPose;
            AnimGraphNode_Root_12: UE.AnimNode_Root;
            AnimGraphNode_Root_11: UE.AnimNode_Root;
            AnimGraphNode_Root_10: UE.AnimNode_Root;
            AnimGraphNode_Root_9: UE.AnimNode_Root;
            AnimGraphNode_Root_8: UE.AnimNode_Root;
            AnimGraphNode_Root_7: UE.AnimNode_Root;
            AnimGraphNode_LinkedInputPose: UE.AnimNode_LinkedInputPose;
            AnimGraphNode_Root_6: UE.AnimNode_Root;
            AnimGraphNode_Root_5: UE.AnimNode_Root;
            AnimGraphNode_Root_4: UE.AnimNode_Root;
            AnimGraphNode_Root_3: UE.AnimNode_Root;
            AnimGraphNode_Root_2: UE.AnimNode_Root;
            AnimGraphNode_Root_1: UE.AnimNode_Root;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_Slot_4: UE.AnimNode_Slot;
            AnimGraphNode_SaveCachedPose_1: UE.AnimNode_SaveCachedPose;
            AnimGraphNode_UseCachedPose_2: UE.AnimNode_UseCachedPose;
            AnimGraphNode_Slot_3: UE.AnimNode_Slot;
            AnimGraphNode_UseCachedPose_1: UE.AnimNode_UseCachedPose;
            AnimGraphNode_IdentityPose: UE.AnimNode_RefPose;
            AnimGraphNode_SaveCachedPose: UE.AnimNode_SaveCachedPose;
            AnimGraphNode_UseCachedPose: UE.AnimNode_UseCachedPose;
            AnimGraphNode_ApplyAdditive_4: UE.AnimNode_ApplyAdditive;
            AnimGraphNode_Inertialization: UE.AnimNode_Inertialization;
            AnimGraphNode_Slot_2: UE.AnimNode_Slot;
            AnimGraphNode_ControlRig: UE.AnimNode_ControlRig;
            AnimGraphNode_RotateRootBone: UE.AnimNode_RotateRootBone;
            AnimGraphNode_Slot_1: UE.AnimNode_Slot;
            AnimGraphNode_TransitionResult_27: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_26: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_25: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_24: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_23: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_22: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_21: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_20: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_19: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_18: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_17: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_16: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_15: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_14: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_13: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_12: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_11: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_10: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_9: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_8: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_7: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_6: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_5: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_4: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_3: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_2: UE.AnimNode_TransitionResult;
            AnimGraphNode_LinkedAnimLayer_13: UE.AnimNode_LinkedAnimLayer;
            AnimGraphNode_StateResult_9: UE.AnimNode_StateResult;
            AnimGraphNode_LinkedAnimLayer_12: UE.AnimNode_LinkedAnimLayer;
            AnimGraphNode_StateResult_8: UE.AnimNode_StateResult;
            AnimGraphNode_TransitionResult_1: UE.AnimNode_TransitionResult;
            AnimGraphNode_LinkedAnimLayer_11: UE.AnimNode_LinkedAnimLayer;
            AnimGraphNode_StateResult_7: UE.AnimNode_StateResult;
            AnimGraphNode_LinkedAnimLayer_10: UE.AnimNode_LinkedAnimLayer;
            AnimGraphNode_StateResult_6: UE.AnimNode_StateResult;
            AnimGraphNode_LinkedAnimLayer_9: UE.AnimNode_LinkedAnimLayer;
            AnimGraphNode_StateResult_5: UE.AnimNode_StateResult;
            AnimGraphNode_TransitionResult: UE.AnimNode_TransitionResult;
            AnimGraphNode_ApplyAdditive_3: UE.AnimNode_ApplyAdditive;
            AnimGraphNode_BlendSpacePlayer_2: UE.AnimNode_BlendSpacePlayer;
            AnimGraphNode_LinkedAnimLayer_8: UE.AnimNode_LinkedAnimLayer;
            AnimGraphNode_StateResult_4: UE.AnimNode_StateResult;
            AnimGraphNode_LinkedAnimLayer_7: UE.AnimNode_LinkedAnimLayer;
            AnimGraphNode_StateResult_3: UE.AnimNode_StateResult;
            AnimGraphNode_ApplyAdditive_2: UE.AnimNode_ApplyAdditive;
            AnimGraphNode_BlendSpacePlayer_1: UE.AnimNode_BlendSpacePlayer;
            AnimGraphNode_LinkedAnimLayer_6: UE.AnimNode_LinkedAnimLayer;
            AnimGraphNode_StateResult_2: UE.AnimNode_StateResult;
            AnimGraphNode_ApplyAdditive_1: UE.AnimNode_ApplyAdditive;
            AnimGraphNode_BlendSpacePlayer: UE.AnimNode_BlendSpacePlayer;
            AnimGraphNode_LinkedAnimLayer_5: UE.AnimNode_LinkedAnimLayer;
            AnimGraphNode_StateResult_1: UE.AnimNode_StateResult;
            AnimGraphNode_LinkedAnimLayer_4: UE.AnimNode_LinkedAnimLayer;
            AnimGraphNode_StateResult: UE.AnimNode_StateResult;
            AnimGraphNode_StateMachine: UE.AnimNode_StateMachine;
            AnimGraphNode_LinkedAnimLayer_3: UE.AnimNode_LinkedAnimLayer;
            AnimGraphNode_LinkedAnimLayer_2: UE.AnimNode_LinkedAnimLayer;
            AnimGraphNode_LinkedAnimLayer_1: UE.AnimNode_LinkedAnimLayer;
            AnimGraphNode_ApplyAdditive: UE.AnimNode_ApplyAdditive;
            AnimGraphNode_Slot: UE.AnimNode_Slot;
            AnimGraphNode_LinkedAnimLayer: UE.AnimNode_LinkedAnimLayer;
            AnimGraphNode_LayeredBoneBlend: UE.AnimNode_LayeredBoneBlend;
            K2Node_PropertyAccess_12: UE.PawnMovementComponent;
            K2Node_PropertyAccess_11: number;
            K2Node_PropertyAccess_10: number;
            K2Node_PropertyAccess_9: boolean;
            K2Node_PropertyAccess_8: UE.EMovementMode;
            K2Node_PropertyAccess_7: boolean;
            K2Node_PropertyAccess_6: boolean;
            K2Node_PropertyAccess_5: UE.Vector;
            K2Node_PropertyAccess_4: UE.Vector;
            K2Node_PropertyAccess_3: UE.Rotator;
            K2Node_PropertyAccess_2: UE.Vector;
            K2Node_PropertyAccess_1: UE.Vector;
            K2Node_PropertyAccess: boolean;
            __CustomProperty_AimPitch_40040A4E4B0007FBC7D2928AADEC9885: number;
            __CustomProperty_AimYaw_40040A4E4B0007FBC7D2928AADEC9885: number;
            __CustomProperty_isMoving2D_BB3E79F34D4AF55996D9D7BC4E44561C: boolean;
            __CustomProperty_isCrouching_BB3E79F34D4AF55996D9D7BC4E44561C: boolean;
            GameplayTag_IsADS: boolean;
            GameplayTag_IsFiring: boolean;
            WorldLocation: UE.Vector;
            DisplacementSinceLastUpdate: number;
            WorldRotation: UE.Rotator;
            RootYawOffset: number;
            YawDeltaSinceLastUpdate: number;
            LocalAcceleration2D: UE.Vector;
            HasAcceleration: boolean;
            IsOnGround: boolean;
            IsCrouching: boolean;
            LinkedLayerChanged: boolean;
            IsFirstUpdate: boolean;
            WorldVelocity: UE.Vector;
            LocalVelocity2D: UE.Vector;
            RootYawOffsetSpringState: UE.FloatSpringState;
            TurnYawCurveValue: number;
            StartDirection: UE.Game.Characters.Heroes.Mannequin.Animations.AnimEnum_CardinalDirection.AnimEnum_CardinalDirection;
            LocalVelocityDirectionAngle: number;
            CardinalDirectionDeadZone: number;
            LocalVelocityDirectionAngleWithOffset: number;
            LocalVelocityDirection: UE.Game.Characters.Heroes.Mannequin.Animations.AnimEnum_CardinalDirection.AnimEnum_CardinalDirection;
            LocalVelocityDirectionNoOffset: UE.Game.Characters.Heroes.Mannequin.Animations.AnimEnum_CardinalDirection.AnimEnum_CardinalDirection;
            DisplacementSpeed: number;
            HasVelocity: boolean;
            PivotInitialDirection: UE.Game.Characters.Heroes.Mannequin.Animations.AnimEnum_CardinalDirection.AnimEnum_CardinalDirection;
            CrouchStateChange: boolean;
            ADSStateChanged: boolean;
            WasADSLastUpdate: boolean;
            TimeSinceFiredWeapon: number;
            IsJumping: boolean;
            IsFalling: boolean;
            AimPitch: number;
            LastLinkedLayer: UE.AnimInstance;
            TimeToJumpApex: number;
            RootYawOffsetMode: UE.Game.Characters.Heroes.Mannequin.Animations.AnimEnum_RootYawOffsetMode.AnimEnum_RootYawOffsetMode;
            GameplayTag_IsReloading: boolean;
            GameplayTag_IsDashing: boolean;
            GameplayTag_IsMelee: boolean;
            RootYawOffsetAngleClamp: UE.Vector2D;
            UpperbodyDynamicAdditiveWeight: number;
            AdditiveLeanAngle: number;
            LastPivotTime: number;
            CardinalDirectionFromAcceleration: UE.Game.Characters.Heroes.Mannequin.Animations.AnimEnum_CardinalDirection.AnimEnum_CardinalDirection;
            RootYawOffsetAngleClampCrouched: UE.Vector2D;
            PivotDirection2D: UE.Vector;
            YawDeltaSpeed: number;
            EnableControlRig: boolean;
            IsRunningIntoWall: boolean;
            AimYaw: number;
            UseFootPlacement: boolean;
            bEnableRootYawOffset: boolean;
            GroundDistance: number;
            AnimGraph(AnimGraph: $Ref<UE.PoseLink>) : void;
            /*
             *Executed when the Animation Blueprint is updated on a worker thread, just prior to graph update
             */
            BlueprintThreadSafeUpdateAnimation(DeltaTime: number) : void;
            /*
             *Executed when the Animation is updated
             */
            BlueprintUpdateAnimation(DeltaTimeX: number) : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_Mannequin_Base_AnimGraphNode_TransitionResult_1055C79348F31FAC2130FA80AE9D38BA() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_Mannequin_Base_AnimGraphNode_TransitionResult_152CFE1D45E17A2AB0D0B1AE20964298() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_Mannequin_Base_AnimGraphNode_TransitionResult_566170A74D8EE91403599A83317117C3() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_Mannequin_Base_AnimGraphNode_TransitionResult_85E447B94059174B31BBE08EC8E49F85() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_Mannequin_Base_AnimGraphNode_TransitionResult_86DC48CD42D907212D6846B9D4FCB4C7() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_Mannequin_Base_AnimGraphNode_TransitionResult_A9DACBD244A90F77BF61879E0E7285E5() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_Mannequin_Base_AnimGraphNode_TransitionResult_AD0B23244DE40C34C20933AE4BAB9A5D() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_Mannequin_Base_AnimGraphNode_TransitionResult_C769E8684839CA62D0BF86AEBA3D5D5C() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_Mannequin_Base_AnimGraphNode_TransitionResult_E7883AC94E886AD8230E4890883097F8() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_Mannequin_Base_AnimGraphNode_TransitionResult_E9E8CF824E23AE3752976E80BEB732BD() : void;
            ExecuteUbergraph_ABP_Mannequin_Base(EntryPoint: number) : void;
            FullBody_Aiming(PreAimPose: UE.PoseLink, AimYaw: number, AimPitch: number, FullBody_Aiming: $Ref<UE.PoseLink>) : void;
            FullBody_CycleState(FullBody_CycleState: $Ref<UE.PoseLink>) : void;
            FullBody_FallLandState(FullBody_FallLandState: $Ref<UE.PoseLink>) : void;
            FullBody_FallLoopState(FullBody_FallLoopState: $Ref<UE.PoseLink>) : void;
            FullBody_IdleState(FullBody_IdleState: $Ref<UE.PoseLink>) : void;
            FullBody_JumpApexState(FullBody_JumpApexState: $Ref<UE.PoseLink>) : void;
            FullBody_JumpStartLoopState(FullBody_JumpStartLoopState: $Ref<UE.PoseLink>) : void;
            FullBody_JumpStartState(FullBody_JumpStartState: $Ref<UE.PoseLink>) : void;
            FullBody_PivotState(FullBody_PivotState: $Ref<UE.PoseLink>) : void;
            FullBody_SkeletalControls(InPose: UE.PoseLink, FullBody_SkeletalControls: $Ref<UE.PoseLink>) : void;
            FullBody_StartState(FullBody_StartState: $Ref<UE.PoseLink>) : void;
            FullBody_StopState(FullBody_StopState: $Ref<UE.PoseLink>) : void;
            FullBodyAdditives(FullBodyAdditives: $Ref<UE.PoseLink>) : void;
            GetMovementComponent() : UE.CharacterMovementComponent;
            GetOppositeCardinalDirection(CurrentDirection: UE.Game.Characters.Heroes.Mannequin.Animations.AnimEnum_CardinalDirection.AnimEnum_CardinalDirection) : UE.Game.Characters.Heroes.Mannequin.Animations.AnimEnum_CardinalDirection.AnimEnum_CardinalDirection;
            IsMovingPerpendicularToInitialPivot() : boolean;
            LeftHandPose_OverrideState(InputPose: UE.PoseLink, LeftHandPose_OverrideState: $Ref<UE.PoseLink>) : void;
            ProcessTurnYawCurve() : void;
            SelectCardinalDirectionFromAngle(Angle: number, DeadZone: number, CurrentDirection: UE.Game.Characters.Heroes.Mannequin.Animations.AnimEnum_CardinalDirection.AnimEnum_CardinalDirection, UseCurrentDirection: boolean, Direction: $Ref<UE.Game.Characters.Heroes.Mannequin.Animations.AnimEnum_CardinalDirection.AnimEnum_CardinalDirection>) : void;
            SetRootYawOffset(InRootYawOffset: number) : void;
            SetUpPivotState(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            SetUpStartState(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            ShouldEnableControlRig() : boolean;
            UpdateAccelerationData() : void;
            UpdateAimingData() : void;
            UpdateBlendWeightData(DeltaTime: number) : void;
            UpdateCharacterStateData(DeltaTime: number) : void;
            UpdateIdleState(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            UpdateJumpFallData() : void;
            UpdateLocationData(DeltaTime: number) : void;
            UpdateLocomotionStateMachine(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            UpdatePivotState(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            UpdateRootYawOffset(InDeltaTime: number) : void;
            UpdateRotationData() : void;
            UpdateStartState(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            UpdateStopState(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            UpdateVelocityData() : void;
            UpdateWallDetectionHeuristic() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_Mannequin_Base_C;
            static Load(InName: string): ABP_Mannequin_Base_C;
        
            __tid_ABP_Mannequin_Base_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: E418627D4F3A708360257FAC7CAD7923
    namespace Game.Characters.Heroes.Mannequin.Animations.ABP_Mannequin_Base {
        class AnimBlueprintGeneratedConstantData extends UE.AnimBlueprintConstantData {
            constructor();
            constructor(__NameProperty_358: string, __NameProperty_359: string, __NameProperty_360: string, __NameProperty_361: string, __NameProperty_362: string, __NameProperty_363: string, __NameProperty_364: string, __NameProperty_365: string, __NameProperty_366: string, __NameProperty_367: string, __NameProperty_368: string, __NameProperty_369: string, __NameProperty_370: string, __NameProperty_371: string, __NameProperty_372: string, __NameProperty_373: string, __ByteProperty_374: UE.ERefPoseType, __NameProperty_375: string, __IntProperty_376: number, __NameProperty_377: string, __IntProperty_378: number, __NameProperty_379: string, __IntProperty_380: number, __NameProperty_381: string, __IntProperty_382: number, __NameProperty_383: string, __IntProperty_384: number, __StructProperty_385: UE.AnimNodeFunctionRef, __StructProperty_386: UE.AnimNodeFunctionRef, __NameProperty_387: string, __IntProperty_388: number, __StructProperty_389: UE.AnimNodeFunctionRef, __NameProperty_390: string, __IntProperty_391: number, __NameProperty_392: string, __IntProperty_393: number, __FloatProperty_394: number, __FloatProperty_395: number, __BoolProperty_396: boolean, __EnumProperty_397: UE.EAnimSyncMethod, __ByteProperty_398: UE.EAnimGroupRole, __StructProperty_399: UE.AnimNodeFunctionRef, __StructProperty_400: UE.AnimNodeFunctionRef, __NameProperty_401: string, __IntProperty_402: number, __StructProperty_403: UE.AnimNodeFunctionRef, __NameProperty_404: string, __NameProperty_405: string, __IntProperty_406: number, __StructProperty_407: UE.AnimNodeFunctionRef, __StructProperty_408: UE.AnimNodeFunctionRef, AnimBlueprintExtension_Tag: UE.AnimSubsystem_Tag, AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess, AnimBlueprintExtension_NodeRelevancy: UE.AnimSubsystem, AnimBlueprintExtension_Base: UE.AnimSubsystem_Base);
            __NameProperty_358: string;
            __NameProperty_359: string;
            __NameProperty_360: string;
            __NameProperty_361: string;
            __NameProperty_362: string;
            __NameProperty_363: string;
            __NameProperty_364: string;
            __NameProperty_365: string;
            __NameProperty_366: string;
            __NameProperty_367: string;
            __NameProperty_368: string;
            __NameProperty_369: string;
            __NameProperty_370: string;
            __NameProperty_371: string;
            __NameProperty_372: string;
            __NameProperty_373: string;
            __ByteProperty_374: UE.ERefPoseType;
            __NameProperty_375: string;
            __IntProperty_376: number;
            __NameProperty_377: string;
            __IntProperty_378: number;
            __NameProperty_379: string;
            __IntProperty_380: number;
            __NameProperty_381: string;
            __IntProperty_382: number;
            __NameProperty_383: string;
            __IntProperty_384: number;
            __StructProperty_385: UE.AnimNodeFunctionRef;
            __StructProperty_386: UE.AnimNodeFunctionRef;
            __NameProperty_387: string;
            __IntProperty_388: number;
            __StructProperty_389: UE.AnimNodeFunctionRef;
            __NameProperty_390: string;
            __IntProperty_391: number;
            __NameProperty_392: string;
            __IntProperty_393: number;
            __FloatProperty_394: number;
            __FloatProperty_395: number;
            __BoolProperty_396: boolean;
            __EnumProperty_397: UE.EAnimSyncMethod;
            __ByteProperty_398: UE.EAnimGroupRole;
            __StructProperty_399: UE.AnimNodeFunctionRef;
            __StructProperty_400: UE.AnimNodeFunctionRef;
            __NameProperty_401: string;
            __IntProperty_402: number;
            __StructProperty_403: UE.AnimNodeFunctionRef;
            __NameProperty_404: string;
            __NameProperty_405: string;
            __IntProperty_406: number;
            __StructProperty_407: UE.AnimNodeFunctionRef;
            __StructProperty_408: UE.AnimNodeFunctionRef;
            AnimBlueprintExtension_Tag: UE.AnimSubsystem_Tag;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess;
            AnimBlueprintExtension_NodeRelevancy: UE.AnimSubsystem;
            AnimBlueprintExtension_Base: UE.AnimSubsystem_Base;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedConstantData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 22A81828455825D8FE6E17A7CC2440C2
    namespace Game.Characters.Heroes.Mannequin.Animations.LinkedLayers.ABP_ItemAnimLayersBase {
        class AnimBlueprintGeneratedMutableData extends UE.AnimBlueprintMutableData {
            constructor();
            constructor(__AnimSequenceBase: UE.AnimSequenceBase, __AnimSequenceBase_0: UE.AnimSequenceBase, __AnimSequenceBase_1: UE.AnimSequenceBase, __FloatProperty_2: number, __AnimSequenceBase_3: UE.AnimSequenceBase, __AnimSequenceBase_4: UE.AnimSequenceBase, __AnimSequenceBase_5: UE.AnimSequenceBase, __AnimSequenceBase_6: UE.AnimSequenceBase, __FloatProperty_7: number, __FloatProperty_8: number, __FloatProperty_9: number, __FloatProperty_10: number, __FloatProperty_11: number, __AnimSequenceBase_12: UE.AnimSequenceBase, __FloatProperty_13: number, __AnimSequenceBase_14: UE.AnimSequenceBase, __AnimSequenceBase_15: UE.AnimSequenceBase, __FloatProperty_16: number, __AnimSequenceBase_17: UE.AnimSequenceBase, __AnimSequenceBase_18: UE.AnimSequenceBase, __FloatProperty_19: number, __AnimSequenceBase_20: UE.AnimSequenceBase, __FloatProperty_21: number, __AnimSequenceBase_22: UE.AnimSequenceBase, __AnimSequenceBase_23: UE.AnimSequenceBase, __FloatProperty_24: number, __FloatProperty_25: number, __AnimSequenceBase_26: UE.AnimSequenceBase);
            __AnimSequenceBase: UE.AnimSequenceBase;
            __AnimSequenceBase_0: UE.AnimSequenceBase;
            __AnimSequenceBase_1: UE.AnimSequenceBase;
            __FloatProperty_2: number;
            __AnimSequenceBase_3: UE.AnimSequenceBase;
            __AnimSequenceBase_4: UE.AnimSequenceBase;
            __AnimSequenceBase_5: UE.AnimSequenceBase;
            __AnimSequenceBase_6: UE.AnimSequenceBase;
            __FloatProperty_7: number;
            __FloatProperty_8: number;
            __FloatProperty_9: number;
            __FloatProperty_10: number;
            __FloatProperty_11: number;
            __AnimSequenceBase_12: UE.AnimSequenceBase;
            __FloatProperty_13: number;
            __AnimSequenceBase_14: UE.AnimSequenceBase;
            __AnimSequenceBase_15: UE.AnimSequenceBase;
            __FloatProperty_16: number;
            __AnimSequenceBase_17: UE.AnimSequenceBase;
            __AnimSequenceBase_18: UE.AnimSequenceBase;
            __FloatProperty_19: number;
            __AnimSequenceBase_20: UE.AnimSequenceBase;
            __FloatProperty_21: number;
            __AnimSequenceBase_22: UE.AnimSequenceBase;
            __AnimSequenceBase_23: UE.AnimSequenceBase;
            __FloatProperty_24: number;
            __FloatProperty_25: number;
            __AnimSequenceBase_26: UE.AnimSequenceBase;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedMutableData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 22A81828455825D8FE6E17A7CC2440C2
    namespace Game.Characters.Heroes.Mannequin.Animations.LinkedLayers.ABP_ItemAnimLayersBase {
        class ABP_ItemAnimLayersBase_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            __AnimBlueprintMutables: UE.Game.Characters.Heroes.Mannequin.Animations.LinkedLayers.ABP_ItemAnimLayersBase.AnimBlueprintGeneratedMutableData;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_NodeRelevancy: UE.AnimSubsystemInstance_NodeRelevancy;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root_14: UE.AnimNode_Root;
            AnimGraphNode_LinkedInputPose_2: UE.AnimNode_LinkedInputPose;
            AnimGraphNode_LayeredBoneBlend_9: UE.AnimNode_LayeredBoneBlend;
            AnimGraphNode_SequenceEvaluator_15: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_Root_13: UE.AnimNode_Root;
            AnimGraphNode_LinkedInputPose_1: UE.AnimNode_LinkedInputPose;
            AnimGraphNode_LocalToComponentSpace_4: UE.AnimNode_ConvertLocalToComponentSpace;
            AnimGraphNode_TwoBoneIK_1: UE.AnimNode_TwoBoneIK;
            AnimGraphNode_TwoBoneIK: UE.AnimNode_TwoBoneIK;
            AnimGraphNode_ComponentToLocalSpace_4: UE.AnimNode_ConvertComponentToLocalSpace;
            AnimGraphNode_LegIK: UE.AnimNode_LegIK;
            AnimGraphNode_ModifyBone_1: UE.AnimNode_ModifyBone;
            AnimGraphNode_FootPlacement: UE.AnimNode_FootPlacement;
            AnimGraphNode_ModifyBone: UE.AnimNode_ModifyBone;
            AnimGraphNode_HandIKRetargeting: UE.AnimNode_HandIKRetargeting;
            AnimGraphNode_CopyBone: UE.AnimNode_CopyBone;
            AnimGraphNode_Root_12: UE.AnimNode_Root;
            AnimGraphNode_SequencePlayer_9: UE.AnimNode_SequencePlayer;
            AnimGraphNode_LayeredBoneBlend_8: UE.AnimNode_LayeredBoneBlend;
            AnimGraphNode_SequenceEvaluator_14: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_Root_11: UE.AnimNode_Root;
            AnimGraphNode_SequencePlayer_8: UE.AnimNode_SequencePlayer;
            AnimGraphNode_LayeredBoneBlend_7: UE.AnimNode_LayeredBoneBlend;
            AnimGraphNode_SequenceEvaluator_13: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_Root_10: UE.AnimNode_Root;
            AnimGraphNode_SequenceEvaluator_12: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_LayeredBoneBlend_6: UE.AnimNode_LayeredBoneBlend;
            AnimGraphNode_SequenceEvaluator_11: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_Root_9: UE.AnimNode_Root;
            AnimGraphNode_SequencePlayer_7: UE.AnimNode_SequencePlayer;
            AnimGraphNode_LayeredBoneBlend_5: UE.AnimNode_LayeredBoneBlend;
            AnimGraphNode_SequenceEvaluator_10: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_Root_8: UE.AnimNode_Root;
            AnimGraphNode_SequencePlayer_6: UE.AnimNode_SequencePlayer;
            AnimGraphNode_LayeredBoneBlend_4: UE.AnimNode_LayeredBoneBlend;
            AnimGraphNode_SequenceEvaluator_9: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_Root_7: UE.AnimNode_Root;
            AnimGraphNode_LinkedInputPose: UE.AnimNode_LinkedInputPose;
            AnimGraphNode_RotationOffsetBlendSpace_1: UE.AnimNode_RotationOffsetBlendSpace;
            AnimGraphNode_SaveCachedPose: UE.AnimNode_SaveCachedPose;
            AnimGraphNode_TwoWayBlend_1: UE.AnimNode_TwoWayBlend;
            AnimGraphNode_UseCachedPose_1: UE.AnimNode_UseCachedPose;
            AnimGraphNode_UseCachedPose: UE.AnimNode_UseCachedPose;
            AnimGraphNode_RotationOffsetBlendSpace: UE.AnimNode_RotationOffsetBlendSpace;
            AnimGraphNode_Root_6: UE.AnimNode_Root;
            AnimGraphNode_TransitionResult_14: UE.AnimNode_TransitionResult;
            AnimGraphNode_StrideWarping_3: UE.AnimNode_StrideWarping;
            AnimGraphNode_ComponentToLocalSpace_3: UE.AnimNode_ConvertComponentToLocalSpace;
            AnimGraphNode_LocalToComponentSpace_3: UE.AnimNode_ConvertLocalToComponentSpace;
            AnimGraphNode_OrientationWarping_3: UE.AnimNode_OrientationWarping;
            AnimGraphNode_SequenceEvaluator_8: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_StateResult_10: UE.AnimNode_StateResult;
            AnimGraphNode_StrideWarping_2: UE.AnimNode_StrideWarping;
            AnimGraphNode_ComponentToLocalSpace_2: UE.AnimNode_ConvertComponentToLocalSpace;
            AnimGraphNode_LocalToComponentSpace_2: UE.AnimNode_ConvertLocalToComponentSpace;
            AnimGraphNode_OrientationWarping_2: UE.AnimNode_OrientationWarping;
            AnimGraphNode_SequenceEvaluator_7: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_StateResult_9: UE.AnimNode_StateResult;
            AnimGraphNode_StateMachine_3: UE.AnimNode_StateMachine;
            AnimGraphNode_LayeredBoneBlend_3: UE.AnimNode_LayeredBoneBlend;
            AnimGraphNode_SequenceEvaluator_6: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_Root_5: UE.AnimNode_Root;
            AnimGraphNode_SequenceEvaluator_5: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_LayeredBoneBlend_2: UE.AnimNode_LayeredBoneBlend;
            AnimGraphNode_SequenceEvaluator_4: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_Root_4: UE.AnimNode_Root;
            AnimGraphNode_SequencePlayer_5: UE.AnimNode_SequencePlayer;
            AnimGraphNode_LayeredBoneBlend_1: UE.AnimNode_LayeredBoneBlend;
            AnimGraphNode_SequenceEvaluator_3: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_OrientationWarping_1: UE.AnimNode_OrientationWarping;
            AnimGraphNode_LocalToComponentSpace_1: UE.AnimNode_ConvertLocalToComponentSpace;
            AnimGraphNode_ComponentToLocalSpace_1: UE.AnimNode_ConvertComponentToLocalSpace;
            AnimGraphNode_StrideWarping_1: UE.AnimNode_StrideWarping;
            AnimGraphNode_Root_3: UE.AnimNode_Root;
            AnimGraphNode_SequenceEvaluator_2: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_LayeredBoneBlend: UE.AnimNode_LayeredBoneBlend;
            AnimGraphNode_SequenceEvaluator_1: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_OrientationWarping: UE.AnimNode_OrientationWarping;
            AnimGraphNode_LocalToComponentSpace: UE.AnimNode_ConvertLocalToComponentSpace;
            AnimGraphNode_ComponentToLocalSpace: UE.AnimNode_ConvertComponentToLocalSpace;
            AnimGraphNode_StrideWarping: UE.AnimNode_StrideWarping;
            AnimGraphNode_Root_2: UE.AnimNode_Root;
            AnimGraphNode_TransitionResult_13: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_12: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_11: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_10: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_9: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_8: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_7: UE.AnimNode_TransitionResult;
            AnimGraphNode_SequencePlayer_4: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_8: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer_3: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_7: UE.AnimNode_StateResult;
            AnimGraphNode_SequenceEvaluator: UE.AnimNode_SequenceEvaluator;
            AnimGraphNode_StateResult_6: UE.AnimNode_StateResult;
            AnimGraphNode_TransitionResult_6: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_5: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_4: UE.AnimNode_TransitionResult;
            AnimGraphNode_SequencePlayer_2: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_5: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer_1: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_4: UE.AnimNode_StateResult;
            AnimGraphNode_StateMachine_2: UE.AnimNode_StateMachine;
            AnimGraphNode_StateResult_3: UE.AnimNode_StateResult;
            AnimGraphNode_StateMachine_1: UE.AnimNode_StateMachine;
            AnimGraphNode_Root_1: UE.AnimNode_Root;
            AnimGraphNode_TransitionResult_3: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_2: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_1: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult: UE.AnimNode_TransitionResult;
            AnimGraphNode_IdentityPose: UE.AnimNode_RefPose;
            AnimGraphNode_TwoWayBlend: UE.AnimNode_TwoWayBlend;
            AnimGraphNode_SequencePlayer: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_2: UE.AnimNode_StateResult;
            AnimGraphNode_StateResult_1: UE.AnimNode_StateResult;
            AnimGraphNode_StateResult: UE.AnimNode_StateResult;
            AnimGraphNode_StateMachine: UE.AnimNode_StateMachine;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AimPitch: number;
            AimYaw: number;
            K2Node_PropertyAccess_66: number;
            K2Node_PropertyAccess_65: number;
            K2Node_PropertyAccess_64: number;
            K2Node_PropertyAccess_63: number;
            K2Node_PropertyAccess_62: boolean;
            K2Node_PropertyAccess_61: UE.Vector;
            K2Node_PropertyAccess_58: UE.PawnMovementComponent;
            K2Node_PropertyAccess_51: boolean;
            K2Node_PropertyAccess_50: boolean;
            K2Node_PropertyAccess_49: boolean;
            K2Node_PropertyAccess_36: UE.AnimInstance;
            K2Node_PropertyAccess_27: number;
            K2Node_PropertyAccess_26: UE.Vector;
            K2Node_PropertyAccess_25: UE.Vector;
            Walk_Cardinals: UE.Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections.AnimStruct_CardinalDirections;
            Crouch_Walk_Cardinals: UE.Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections.AnimStruct_CardinalDirections;
            Idle_ADS: UE.AnimSequence;
            Idle_Hipfire: UE.AnimSequence;
            Idle_Breaks: TArray<UE.AnimSequence>;
            Jog_Cardinals: UE.Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections.AnimStruct_CardinalDirections;
            Jog_Pivot_Cardinals: UE.Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections.AnimStruct_CardinalDirections;
            Jog_Start_Cardinals: UE.Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections.AnimStruct_CardinalDirections;
            Jog_Stop_Cardinals: UE.Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections.AnimStruct_CardinalDirections;
            Jump_Start: UE.AnimSequence;
            Jump_Apex: UE.AnimSequence;
            Jump_FallLand: UE.AnimSequence;
            Jump_RecoveryAdditive: UE.AnimSequence;
            Crouch_Idle: UE.AnimSequence;
            WantsIdleBreak: boolean;
            TimeUntilNextIdleBreak: number;
            CurrentIdleBreakIndex: number;
            Aim_HipFirePose: UE.AnimSequence;
            Aim_HipFirePose_Crouch: UE.AnimSequence;
            TurnInPlaceAnimTime: number;
            PlayRateClampStartsPivots: UE.Vector2D;
            PivotStartingAcceleration: UE.Vector;
            IdleAimOffset: UE.AimOffsetBlendSpace;
            ADS_Start_Cardinals: UE.Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections.AnimStruct_CardinalDirections;
            Crouch_Start_Cardinals: UE.Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections.AnimStruct_CardinalDirections;
            ADS_Stop_Cardinals: UE.Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections.AnimStruct_CardinalDirections;
            Crouch_Stop_Cardinals: UE.Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections.AnimStruct_CardinalDirections;
            ADS_Pivot_Cardinals: UE.Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections.AnimStruct_CardinalDirections;
            Crouch_Pivot_Cardinals: UE.Game.Characters.Heroes.Mannequin.Animations.AnimStruct_CardinalDirections.AnimStruct_CardinalDirections;
            RaiseWeaponAfterFiringWhenCrouched: boolean;
            DisableHandIK: boolean;
            EnableLeftHandPoseOverride: boolean;
            RaiseWeaponAfterFiringDuration: number;
            HipFireUpperBodyOverrideWeight: number;
            IdleBreakDelayTime: number;
            Jump_StartLoop: UE.AnimSequence;
            Jump_FallLoop: UE.AnimSequence;
            LandRecoveryAlpha: number;
            TimeFalling: number;
            HandIK_Right_Alpha: number;
            HandIK_Left_Alpha: number;
            StrideWarpingStartAlpha: number;
            StrideWarpingPivotAlpha: number;
            StrideWarpingCycleAlpha: number;
            TimeAtPivotStop: number;
            StrideWarpingBlendInDurationScaled: number;
            StrideWarpingBlendInStartOffset: number;
            Crouch_Idle_Entry: UE.AnimSequence;
            Crouch_Idle_Exit: UE.AnimSequence;
            LeftHandPose_Override: UE.AnimSequence;
            LocomotionDistanceCurveName: string;
            JumpDistanceCurveName: string;
            AimOffsetBlendWeight: number;
            RelaxedAimOffset: UE.AimOffsetBlendSpace;
            PlayRateClampCycle: UE.Vector2D;
            TurnInPlace_Left: UE.AnimSequence;
            LeftHandPoseOverrideWeight: number;
            ["Hand FKWeight"]: number;
            TurnInPlaceRotationDirection: number;
            TurnInPlace_Right: UE.AnimSequence;
            Crouch_TurnInPlace_Left: UE.AnimSequence;
            Crouch_TurnInPlace_Right: UE.AnimSequence;
            TurnInPlaceRecoveryDirection: number;
            AnimGraph(AnimGraph: $Ref<UE.PoseLink>) : void;
            /*
             *Executed when the Animation Blueprint is updated on a worker thread, just prior to graph update
             */
            BlueprintThreadSafeUpdateAnimation(DeltaTime: number) : void;
            CanPlayIdleBreak() : boolean;
            ChooseIdleBreakDelayTime() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_ItemAnimLayersBase_AnimGraphNode_OrientationWarping_2C1B769040BB1686C214F6B3C9A2E628() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_ItemAnimLayersBase_AnimGraphNode_OrientationWarping_3C0F3A78455F356C98947F86B139D18E() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_ItemAnimLayersBase_AnimGraphNode_OrientationWarping_45973118443A29506462D9AA47DE0C21() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_ItemAnimLayersBase_AnimGraphNode_OrientationWarping_488EB8FB423BA02AB1D50F9C4A63DF35() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_ItemAnimLayersBase_AnimGraphNode_StrideWarping_32544EF84101591BDA1B94966367B5C4() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_ItemAnimLayersBase_AnimGraphNode_StrideWarping_A3FF07184D0B3EE3BAB9A38097683C2F() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_ItemAnimLayersBase_AnimGraphNode_StrideWarping_BAA1199343188ED2495545A5FF5C50C7() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_ItemAnimLayersBase_AnimGraphNode_StrideWarping_E1268DC340CF69EF0149D5B0C62D7EF6() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_ItemAnimLayersBase_AnimGraphNode_TransitionResult_058DB4E0417ED39E88D33C91173BA695() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_ItemAnimLayersBase_AnimGraphNode_TransitionResult_224806A94B545D339CE8A9ADF5CC1D50() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_ItemAnimLayersBase_AnimGraphNode_TransitionResult_371F3DE74736AE1449FACEBE80488585() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_ItemAnimLayersBase_AnimGraphNode_TransitionResult_3EBC79A34BA5BDBB35C3AEA73A7FF303() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_ItemAnimLayersBase_AnimGraphNode_TransitionResult_BBCED9454BC26FA40FD3939B43D7563D() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_ItemAnimLayersBase_AnimGraphNode_TransitionResult_C1B2373E4CD96E6AA5AC29B5006E923D() : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_ItemAnimLayersBase_AnimGraphNode_TransitionResult_CB948B21469605C8A4C5109A2408CE02() : void;
            ExecuteUbergraph_ABP_ItemAnimLayersBase(EntryPoint: number) : void;
            FullBody_Aiming(PreAimPose: UE.PoseLink, AimYaw: number, AimPitch: number, FullBody_Aiming: $Ref<UE.PoseLink>) : void;
            FullBody_CycleState(FullBody_CycleState: $Ref<UE.PoseLink>) : void;
            FullBody_FallLandState(FullBody_FallLandState: $Ref<UE.PoseLink>) : void;
            FullBody_FallLoopState(FullBody_FallLoopState: $Ref<UE.PoseLink>) : void;
            FullBody_IdleState(FullBody_IdleState: $Ref<UE.PoseLink>) : void;
            FullBody_JumpApexState(FullBody_JumpApexState: $Ref<UE.PoseLink>) : void;
            FullBody_JumpStartLoopState(FullBody_JumpStartLoopState: $Ref<UE.PoseLink>) : void;
            FullBody_JumpStartState(FullBody_JumpStartState: $Ref<UE.PoseLink>) : void;
            FullBody_PivotState(FullBody_PivotState: $Ref<UE.PoseLink>) : void;
            FullBody_SkeletalControls(InPose: UE.PoseLink, FullBody_SkeletalControls: $Ref<UE.PoseLink>) : void;
            FullBody_StartState(FullBody_StartState: $Ref<UE.PoseLink>) : void;
            FullBody_StopState(FullBody_StopState: $Ref<UE.PoseLink>) : void;
            FullBodyAdditives(FullBodyAdditives: $Ref<UE.PoseLink>) : void;
            GetDesiredPivotSequence(InDirection: UE.Game.Characters.Heroes.Mannequin.Animations.AnimEnum_CardinalDirection.AnimEnum_CardinalDirection) : UE.AnimSequenceBase;
            GetMainAnimBPThreadSafe() : UE.Game.Characters.Heroes.Mannequin.Animations.ABP_Mannequin_Base.ABP_Mannequin_Base_C;
            GetMovementComponent() : UE.CharacterMovementComponent;
            GetPredictedStopDistance() : number;
            ["Land Recovery Start"](Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            LeftHandPose_OverrideState(InputPose: UE.PoseLink, LeftHandPose_OverrideState: $Ref<UE.PoseLink>) : void;
            ProcessIdleBreakTransitionLogic(DeltaTime: number) : void;
            ResetIdleBreakTransitionLogic() : void;
            SelectTurnInPlaceAnimation(Direction: number, Result: $Ref<UE.AnimSequence>) : void;
            SetLeftHandPoseOverrideWeight(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            SetUpFallLandAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            SetUpIdleBreakAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            SetUpIdleState(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            SetupIdleTransition(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            SetUpPivotAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            SetUpStartAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            SetUpStopAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            SetupTurnInPlaceAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            SetUpTurnInPlaceRecoveryState(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            SetUpTurnInPlaceRotationState(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            ShouldDistanceMatchStop() : boolean;
            ShouldEnableFootPlacement() : boolean;
            ["Update Blend Weight Data"](DeltaTime: number) : void;
            UpdateCycleAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            UpdateFallLandAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            UpdateHipFireRaiseWeaponPose(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            UpdateIdleAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            UpdateIdleState(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            UpdateJumpFallData(DeltaTime: number) : void;
            UpdatePivotAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            UpdateSkelControlData() : void;
            UpdateStartAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            UpdateStopAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            UpdateTurnInPlaceAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            UpdateTurnInPlaceRecoveryAnim(Context: UE.AnimUpdateContext, Node: UE.AnimNodeReference) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_ItemAnimLayersBase_C;
            static Load(InName: string): ABP_ItemAnimLayersBase_C;
        
            __tid_ABP_ItemAnimLayersBase_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 22A81828455825D8FE6E17A7CC2440C2
    namespace Game.Characters.Heroes.Mannequin.Animations.LinkedLayers.ABP_ItemAnimLayersBase {
        class AnimBlueprintGeneratedConstantData extends UE.AnimBlueprintConstantData {
            constructor();
            constructor(__NameProperty_646: string, __StructProperty_647: UE.AnimNodeFunctionRef, __NameProperty_648: string, __NameProperty_649: string, __NameProperty_650: string, __NameProperty_651: string, __StructProperty_652: UE.AnimNodeFunctionRef, __StructProperty_653: UE.AnimNodeFunctionRef, __NameProperty_654: string, __NameProperty_655: string, __NameProperty_656: string, __NameProperty_657: string, __NameProperty_658: string, __StructProperty_659: UE.AnimNodeFunctionRef, __StructProperty_660: UE.AnimNodeFunctionRef, __NameProperty_661: string, __NameProperty_662: string, __StructProperty_663: UE.AnimNodeFunctionRef, __StructProperty_664: UE.AnimNodeFunctionRef, __NameProperty_665: string, __NameProperty_666: string, __StructProperty_667: UE.AnimNodeFunctionRef, __NameProperty_668: string, __StructProperty_669: UE.AnimNodeFunctionRef, __StructProperty_670: UE.AnimNodeFunctionRef, __NameProperty_671: string, __StructProperty_672: UE.AnimNodeFunctionRef, __NameProperty_673: string, __StructProperty_674: UE.AnimNodeFunctionRef, __NameProperty_675: string, __IntProperty_676: number, __StructProperty_677: UE.AnimNodeFunctionRef, __StructProperty_678: UE.AnimNodeFunctionRef, __NameProperty_679: string, __StructProperty_680: UE.AnimNodeFunctionRef, __StructProperty_681: UE.AnimNodeFunctionRef, __ByteProperty_682: UE.ESequenceEvalReinit, __EnumProperty_683: UE.EAnimSyncMethod, __NameProperty_684: string, __StructProperty_685: UE.AnimNodeFunctionRef, __NameProperty_686: string, __StructProperty_687: UE.AnimNodeFunctionRef, __NameProperty_688: string, __StructProperty_689: UE.AnimNodeFunctionRef, __BoolProperty_690: boolean, __StructProperty_691: UE.AnimNodeFunctionRef, __StructProperty_692: UE.AnimNodeFunctionRef, __NameProperty_693: string, __NameProperty_694: string, __NameProperty_695: string, __ByteProperty_696: UE.ERefPoseType, __FloatProperty_697: number, __StructProperty_698: UE.InputScaleBiasClampConstants, __FloatProperty_699: number, __BoolProperty_700: boolean, __EnumProperty_701: UE.EAnimSyncMethod, __ByteProperty_702: UE.EAnimGroupRole, __StructProperty_703: UE.AnimNodeFunctionRef, __NameProperty_704: string, __IntProperty_705: number, __NameProperty_706: string, __IntProperty_707: number, __NameProperty_708: string, __IntProperty_709: number, __StructProperty_710: UE.AnimNodeFunctionRef, __NameProperty_711: string, __NameProperty_712: string, AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess, AnimBlueprintExtension_NodeRelevancy: UE.AnimSubsystem, AnimBlueprintExtension_Base: UE.AnimSubsystem_Base);
            __NameProperty_646: string;
            __StructProperty_647: UE.AnimNodeFunctionRef;
            __NameProperty_648: string;
            __NameProperty_649: string;
            __NameProperty_650: string;
            __NameProperty_651: string;
            __StructProperty_652: UE.AnimNodeFunctionRef;
            __StructProperty_653: UE.AnimNodeFunctionRef;
            __NameProperty_654: string;
            __NameProperty_655: string;
            __NameProperty_656: string;
            __NameProperty_657: string;
            __NameProperty_658: string;
            __StructProperty_659: UE.AnimNodeFunctionRef;
            __StructProperty_660: UE.AnimNodeFunctionRef;
            __NameProperty_661: string;
            __NameProperty_662: string;
            __StructProperty_663: UE.AnimNodeFunctionRef;
            __StructProperty_664: UE.AnimNodeFunctionRef;
            __NameProperty_665: string;
            __NameProperty_666: string;
            __StructProperty_667: UE.AnimNodeFunctionRef;
            __NameProperty_668: string;
            __StructProperty_669: UE.AnimNodeFunctionRef;
            __StructProperty_670: UE.AnimNodeFunctionRef;
            __NameProperty_671: string;
            __StructProperty_672: UE.AnimNodeFunctionRef;
            __NameProperty_673: string;
            __StructProperty_674: UE.AnimNodeFunctionRef;
            __NameProperty_675: string;
            __IntProperty_676: number;
            __StructProperty_677: UE.AnimNodeFunctionRef;
            __StructProperty_678: UE.AnimNodeFunctionRef;
            __NameProperty_679: string;
            __StructProperty_680: UE.AnimNodeFunctionRef;
            __StructProperty_681: UE.AnimNodeFunctionRef;
            __ByteProperty_682: UE.ESequenceEvalReinit;
            __EnumProperty_683: UE.EAnimSyncMethod;
            __NameProperty_684: string;
            __StructProperty_685: UE.AnimNodeFunctionRef;
            __NameProperty_686: string;
            __StructProperty_687: UE.AnimNodeFunctionRef;
            __NameProperty_688: string;
            __StructProperty_689: UE.AnimNodeFunctionRef;
            __BoolProperty_690: boolean;
            __StructProperty_691: UE.AnimNodeFunctionRef;
            __StructProperty_692: UE.AnimNodeFunctionRef;
            __NameProperty_693: string;
            __NameProperty_694: string;
            __NameProperty_695: string;
            __ByteProperty_696: UE.ERefPoseType;
            __FloatProperty_697: number;
            __StructProperty_698: UE.InputScaleBiasClampConstants;
            __FloatProperty_699: number;
            __BoolProperty_700: boolean;
            __EnumProperty_701: UE.EAnimSyncMethod;
            __ByteProperty_702: UE.EAnimGroupRole;
            __StructProperty_703: UE.AnimNodeFunctionRef;
            __NameProperty_704: string;
            __IntProperty_705: number;
            __NameProperty_706: string;
            __IntProperty_707: number;
            __NameProperty_708: string;
            __IntProperty_709: number;
            __StructProperty_710: UE.AnimNodeFunctionRef;
            __NameProperty_711: string;
            __NameProperty_712: string;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess;
            AnimBlueprintExtension_NodeRelevancy: UE.AnimSubsystem;
            AnimBlueprintExtension_Base: UE.AnimSubsystem_Base;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedConstantData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 562838E24DB68F54231AAE81ECD40AB6
    namespace Game.Characters.Heroes.Mannequin.Animations.Locomotion.Unarmed.ABP_UnarmedAnimLayers_Feminine {
        class ABP_UnarmedAnimLayers_Feminine_C extends UE.Game.Characters.Heroes.Mannequin.Animations.LinkedLayers.ABP_ItemAnimLayersBase.ABP_ItemAnimLayersBase_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_UnarmedAnimLayers_Feminine_C;
            static Load(InName: string): ABP_UnarmedAnimLayers_Feminine_C;
        
            __tid_ABP_UnarmedAnimLayers_Feminine_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 562838E24DB68F54231AAE81ECD40AB6
    namespace Game.Characters.Heroes.Mannequin.Animations.Locomotion.Unarmed.ABP_UnarmedAnimLayers_Feminine {
        class AnimBlueprintGeneratedConstantData extends UE.Game.Characters.Heroes.Mannequin.Animations.LinkedLayers.ABP_ItemAnimLayersBase.AnimBlueprintGeneratedConstantData {
            constructor();
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedConstantData_1__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 505EC8EB440025642B7DF7A0CDB76EBE
    namespace Game.Characters.Heroes.Mannequin.Rig.ABP_Quinn_PostProcess {
        class ABP_Quinn_PostProcess_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_LinkedInputPose: UE.AnimNode_LinkedInputPose;
            AnimGraphNode_ControlRig: UE.AnimNode_ControlRig;
            AnimGraphNode_PoseDriver_13: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_12: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_11: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_10: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_9: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_8: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_7: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_6: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_5: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_4: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_3: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_2: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_1: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver: UE.AnimNode_PoseDriver;
            AnimGraph(InPose: UE.PoseLink, AnimGraph: $Ref<UE.PoseLink>) : void;
            ExecuteUbergraph_ABP_Quinn_PostProcess(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_Quinn_PostProcess_C;
            static Load(InName: string): ABP_Quinn_PostProcess_C;
        
            __tid_ABP_Quinn_PostProcess_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 505EC8EB440025642B7DF7A0CDB76EBE
    namespace Game.Characters.Heroes.Mannequin.Rig.ABP_Quinn_PostProcess {
        class AnimBlueprintGeneratedConstantData extends UE.AnimBlueprintConstantData {
            constructor();
            constructor(__NameProperty_49: string, __NameProperty_50: string, __StructProperty_51: UE.AnimNodeFunctionRef, AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess, AnimBlueprintExtension_Base: UE.AnimSubsystem_Base);
            __NameProperty_49: string;
            __NameProperty_50: string;
            __StructProperty_51: UE.AnimNodeFunctionRef;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess;
            AnimBlueprintExtension_Base: UE.AnimSubsystem_Base;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedConstantData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 9CFF95C347624AA0AE106AADCAFF420B
    namespace Game.Characters.Heroes.Mannequin.Rig.CR_Mannequin_FootPlant {
        class CR_Mannequin_FootPlant_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            LeftFootOffset: UE.Vector;
            RightFootOffset: UE.Vector;
            CurrentLeftFootHitNormal: UE.Vector;
            TargetLeftFootOffsetZ: number;
            CurrentRightFootHitNormal: UE.Vector;
            DidLeftFootTraceHit: boolean;
            TargetRightFootOffsetZ: number;
            DidRightFootTraceHit: boolean;
            CurrentPelvisOffsetZ: number;
            PelvisBlendSpeed: number;
            CurrentLeftFootOffsetZ: number;
            CurrentRightFootOffsetZ: number;
            MathVectorDistance_Result: number;
            AlphaInterp_Result: number;
            isCharacterSloping: boolean;
            characterSlopeAngle: UE.Vector;
            isCrouching: boolean;
            isSlopingAndCrouching: boolean;
            isMoving2D: boolean;
            MathVectorUnit_Result: UE.Vector;
            ThighLength: number;
            CalfLength: number;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CR_Mannequin_FootPlant_C;
            static Load(InName: string): CR_Mannequin_FootPlant_C;
        
            __tid_CR_Mannequin_FootPlant_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 9CFF95C347624AA0AE106AADCAFF420B
    namespace Game.Characters.Heroes.Mannequin.Rig.CR_Mannequin_FootPlant {
        class RigVMMemory_Literal extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            RigVMModel___SetTransform_4_2_1_2_Item__Const: UE.RigElementKey;
            RigVMModel___SetTransform_4_2_1_2_Space__Const: UE.ERigVMTransformSpace;
            RigVMModel___SetTransform_4_2_1_2_bInitial__Const: boolean;
            RigVMModel___RigUnit_GetTransform_1_1_2_Item__Const: UE.RigElementKey;
            RigVMModel___SetTransform_4_2_1_2_Weight__Const: number;
            RigVMModel___SetTransform_4_2_1_2_bPropagateToChildren__Const: boolean;
            RigVMModel___SetTransform_4_1_1_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___RigUnit_GetTransform_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetTransform_4_2_1_1_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___RigUnit_GetTransform_1_1_1_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetTransform_4_2_1_1_2_Item__Const: UE.RigElementKey;
            RigVMModel___RigUnit_GetTransform_1_1_1_2_Item__Const: UE.RigElementKey;
            RigVMModel___ParentConstraint_Child__Const: UE.RigElementKey;
            RigVMModel___ParentConstraint_Filter__Const: UE.TransformFilter;
            RigVMModel___ParentConstraint_Parents__Const: TArray<UE.ConstraintParent>;
            RigVMModel___ParentConstraint_AdvancedSettings__Const: UE.RigUnit_ParentConstraint_AdvancedSettings;
            RigVMModel___ParentConstraint_1_Child__Const: UE.RigElementKey;
            RigVMModel___ParentConstraint_1_Parents__Const: TArray<UE.ConstraintParent>;
            RigVMModel___DrawSlope_1_Item__Const: UE.RigElementKey;
            RigVMModel___DrawSlope_1_Color__Const: UE.LinearColor;
            RigVMModel___DrawSlope_1_Rectangle_Size__Const: number;
            RigVMModel___DrawSlope_1_Rectangle_Thickness__Const: number;
            RigVMModel___DrawSlope_1_Axis__Const: UE.Vector;
            RigVMModel___DrawSlope_1_Hit_Radius__Const: number;
            LocalVariableDefault__DrawSlope_hitPoints__Const: TArray<UE.Vector>;
            LocalVariableDefault__DrawSlope_ArrayIterator_Array__Const: TArray<UE.Vector>;
            LocalVariableDefault__DrawSlope_isSloping__Const: boolean;
            LocalVariableDefault__DrawSlope_slopeAngle__Const: UE.Vector;
            LocalVariableDefault__DrawSlope_hitPoint__Const: UE.Vector;
            LocalVariableDefault__DrawSlope_HitNormal__Const: UE.Vector;
            LocalVariableDefault__DrawSlope_HitLocation__Const: UE.Vector;
            LocalVariableDefault__DrawSlope_MathVectorClampSpatially_Result__Const: UE.Vector;
            DrawSlope_1___DrawSlope_RigUnit_GetTransform_5_1_Space__Const: UE.ERigVMTransformSpace;
            DrawSlope_1___DrawSlope_RigUnit_GetTransform_5_1_bInitial__Const: boolean;
            DrawSlope_1___DrawSlope_MathVectorScale_Factor__Const: number;
            DrawSlope_1___DrawSlope_SphereTraceByTraceChannel_TraceChannel__Const: UE.ETraceTypeQuery;
            DrawSlope_1___DrawSlope_MathVectorAdd_2_B__Const: UE.Vector;
            DrawSlope_1___DrawSlope_MathVectorAdd_1_1_B__Const: UE.Vector;
            DrawSlope_1___DrawSlope_AimBoneMath_2_InputTransform__Const: UE.Transform;
            DrawSlope_1___DrawSlope_AimBoneMath_2_Primary__Const: UE.RigUnit_AimItem_Target;
            DrawSlope_1___DrawSlope_AimBoneMath_2_Secondary__Const: UE.RigUnit_AimItem_Target;
            DrawSlope_1___DrawSlope_AimBoneMath_2_Weight__Const: number;
            DrawSlope_1___DrawSlope_AimBoneMath_2_DebugSettings__Const: UE.RigUnit_AimBone_DebugSettings;
            DrawSlope_1___DrawSlope_MathQuaternionToEuler_RotationOrder__Const: UE.EEulerRotationOrder;
            DrawSlope_1___DrawSlope_MathVectorIsNearlyZero_Tolerance__Const: number;
            DrawSlope_1___DrawSlope_DebugRectangleItemSpace_bEnabled__Const: boolean;
            DrawSlope_1___DrawSlope_DebugLineItemSpace_Color__Const: UE.LinearColor;
            DrawSlope_1___DrawSlope_DebugLineItemSpace_Thickness__Const: number;
            DrawSlope_1___DrawSlope_DebugTransformMutableItemSpace_Mode__Const: UE.ERigUnitDebugTransformMode;
            DrawSlope_1___DrawSlope_DebugTransformMutableItemSpace_Thickness__Const: number;
            DrawSlope_1___DrawSlope_DebugTransformMutableItemSpace_Scale__Const: number;
            RigVMModel___DrawSlope_2_Item__Const: UE.RigElementKey;
            DrawSlope_2___DrawSlope_RigUnit_GetTransform_5_1_Space__Const: UE.ERigVMTransformSpace;
            DrawSlope_2___DrawSlope_RigUnit_GetTransform_5_1_bInitial__Const: boolean;
            DrawSlope_2___DrawSlope_MathVectorScale_Factor__Const: number;
            DrawSlope_2___DrawSlope_SphereTraceByTraceChannel_TraceChannel__Const: UE.ETraceTypeQuery;
            DrawSlope_2___DrawSlope_MathVectorAdd_2_B__Const: UE.Vector;
            DrawSlope_2___DrawSlope_MathVectorAdd_1_1_B__Const: UE.Vector;
            DrawSlope_2___DrawSlope_AimBoneMath_2_InputTransform__Const: UE.Transform;
            DrawSlope_2___DrawSlope_AimBoneMath_2_Primary__Const: UE.RigUnit_AimItem_Target;
            DrawSlope_2___DrawSlope_AimBoneMath_2_Secondary__Const: UE.RigUnit_AimItem_Target;
            DrawSlope_2___DrawSlope_AimBoneMath_2_Weight__Const: number;
            DrawSlope_2___DrawSlope_AimBoneMath_2_DebugSettings__Const: UE.RigUnit_AimBone_DebugSettings;
            DrawSlope_2___DrawSlope_MathQuaternionToEuler_RotationOrder__Const: UE.EEulerRotationOrder;
            DrawSlope_2___DrawSlope_MathVectorIsNearlyZero_Tolerance__Const: number;
            DrawSlope_2___DrawSlope_DebugRectangleItemSpace_bEnabled__Const: boolean;
            DrawSlope_2___DrawSlope_DebugLineItemSpace_Color__Const: UE.LinearColor;
            DrawSlope_2___DrawSlope_DebugLineItemSpace_Thickness__Const: number;
            DrawSlope_2___DrawSlope_DebugTransformMutableItemSpace_Mode__Const: UE.ERigUnitDebugTransformMode;
            DrawSlope_2___DrawSlope_DebugTransformMutableItemSpace_Thickness__Const: number;
            DrawSlope_2___DrawSlope_DebugTransformMutableItemSpace_Scale__Const: number;
            DrawSlope___DrawSlope_RigUnit_GetTransform_5_1_Space__Const: UE.ERigVMTransformSpace;
            DrawSlope___DrawSlope_RigUnit_GetTransform_5_1_bInitial__Const: boolean;
            DrawSlope___DrawSlope_MathVectorScale_Factor__Const: number;
            DrawSlope___DrawSlope_SphereTraceByTraceChannel_TraceChannel__Const: UE.ETraceTypeQuery;
            DrawSlope___DrawSlope_MathVectorAdd_2_B__Const: UE.Vector;
            DrawSlope___DrawSlope_MathVectorAdd_1_1_B__Const: UE.Vector;
            DrawSlope___DrawSlope_AimBoneMath_2_InputTransform__Const: UE.Transform;
            DrawSlope___DrawSlope_AimBoneMath_2_Primary__Const: UE.RigUnit_AimItem_Target;
            DrawSlope___DrawSlope_AimBoneMath_2_Secondary__Const: UE.RigUnit_AimItem_Target;
            DrawSlope___DrawSlope_AimBoneMath_2_Weight__Const: number;
            DrawSlope___DrawSlope_AimBoneMath_2_DebugSettings__Const: UE.RigUnit_AimBone_DebugSettings;
            DrawSlope___DrawSlope_MathQuaternionToEuler_RotationOrder__Const: UE.EEulerRotationOrder;
            DrawSlope___DrawSlope_MathVectorIsNearlyZero_Tolerance__Const: number;
            DrawSlope___DrawSlope_DebugRectangleItemSpace_bEnabled__Const: boolean;
            DrawSlope___DrawSlope_DebugLineItemSpace_Color__Const: UE.LinearColor;
            DrawSlope___DrawSlope_DebugLineItemSpace_Thickness__Const: number;
            DrawSlope___DrawSlope_DebugTransformMutableItemSpace_Mode__Const: UE.ERigUnitDebugTransformMode;
            DrawSlope___DrawSlope_DebugTransformMutableItemSpace_Thickness__Const: number;
            DrawSlope___DrawSlope_DebugTransformMutableItemSpace_Scale__Const: number;
            RigVMModel___ProcessFootTrace_Sphere_Radius__Const: number;
            ProcessFootTrace___ProcessFootTrace_RigUnit_GetTransform_1_1_2_1_2_Space__Const: UE.ERigVMTransformSpace;
            ProcessFootTrace___ProcessFootTrace_RigUnit_GetTransform_1_1_2_1_2_bInitial__Const: boolean;
            ProcessFootTrace___ProcessFootTrace_MathVectorAdd_5_1_1_2_B__Const: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_RigUnit_VisualDebugVectorItemSpace_3_bEnabled__Const: boolean;
            ProcessFootTrace___ProcessFootTrace_RigUnit_VisualDebugVectorItemSpace_3_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            ProcessFootTrace___ProcessFootTrace_RigUnit_VisualDebugVectorItemSpace_3_Color__Const: UE.LinearColor;
            ProcessFootTrace___ProcessFootTrace_RigUnit_VisualDebugVectorItemSpace_3_Thickness__Const: number;
            ProcessFootTrace___ProcessFootTrace_RigUnit_VisualDebugVectorItemSpace_3_Scale__Const: number;
            ProcessFootTrace___ProcessFootTrace_RigUnit_VisualDebugVectorItemSpace_1_2_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            ProcessFootTrace___ProcessFootTrace_SphereTraceByTraceChannel_TraceChannel__Const: UE.ETraceTypeQuery;
            ProcessFootTrace___ProcessFootTrace_If_2_False__Const: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_SpringInterpVectorV2_Strength__Const: number;
            ProcessFootTrace___ProcessFootTrace_SpringInterpVectorV2_Force__Const: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_SpringInterpVectorV2_TargetVelocityAmount__Const: number;
            ProcessFootTrace___ProcessFootTrace_If_True__Const: UE.LinearColor;
            ProcessFootTrace___ProcessFootTrace_If_False__Const: UE.LinearColor;
            ProcessFootTrace___ProcessFootTrace_DebugLineItemSpace_WorldOffset__Const: UE.Transform;
            ProcessFootTrace___ProcessFootTrace_DebugTransformMutableItemSpace_Mode__Const: UE.ERigUnitDebugTransformMode;
            ProcessFootTrace___ProcessFootTrace_DebugTransformMutableItemSpace_Scale__Const: number;
            ProcessFootTrace___ProcessFootTrace_MathVectorScale_Factor__Const: number;
            ProcessFootTrace___ProcessFootTrace_DebugLineItemSpace_1_Thickness__Const: number;
            ProcessFootTrace_1___ProcessFootTrace_RigUnit_GetTransform_1_1_2_1_2_Space__Const: UE.ERigVMTransformSpace;
            ProcessFootTrace_1___ProcessFootTrace_RigUnit_GetTransform_1_1_2_1_2_bInitial__Const: boolean;
            ProcessFootTrace_1___ProcessFootTrace_MathVectorAdd_5_1_1_2_B__Const: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_RigUnit_VisualDebugVectorItemSpace_3_bEnabled__Const: boolean;
            ProcessFootTrace_1___ProcessFootTrace_RigUnit_VisualDebugVectorItemSpace_3_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            ProcessFootTrace_1___ProcessFootTrace_RigUnit_VisualDebugVectorItemSpace_3_Color__Const: UE.LinearColor;
            ProcessFootTrace_1___ProcessFootTrace_RigUnit_VisualDebugVectorItemSpace_3_Thickness__Const: number;
            ProcessFootTrace_1___ProcessFootTrace_RigUnit_VisualDebugVectorItemSpace_3_Scale__Const: number;
            ProcessFootTrace_1___ProcessFootTrace_RigUnit_VisualDebugVectorItemSpace_1_2_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            ProcessFootTrace_1___ProcessFootTrace_SphereTraceByTraceChannel_TraceChannel__Const: UE.ETraceTypeQuery;
            ProcessFootTrace_1___ProcessFootTrace_If_2_False__Const: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_SpringInterpVectorV2_Strength__Const: number;
            ProcessFootTrace_1___ProcessFootTrace_SpringInterpVectorV2_Force__Const: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_SpringInterpVectorV2_TargetVelocityAmount__Const: number;
            ProcessFootTrace_1___ProcessFootTrace_If_True__Const: UE.LinearColor;
            ProcessFootTrace_1___ProcessFootTrace_If_False__Const: UE.LinearColor;
            ProcessFootTrace_1___ProcessFootTrace_DebugLineItemSpace_WorldOffset__Const: UE.Transform;
            ProcessFootTrace_1___ProcessFootTrace_DebugTransformMutableItemSpace_Mode__Const: UE.ERigUnitDebugTransformMode;
            ProcessFootTrace_1___ProcessFootTrace_DebugTransformMutableItemSpace_Scale__Const: number;
            ProcessFootTrace_1___ProcessFootTrace_MathVectorScale_Factor__Const: number;
            ProcessFootTrace_1___ProcessFootTrace_DebugLineItemSpace_1_Thickness__Const: number;
            RigVMModel___SpringInterpV2_Strength__Const: number;
            RigVMModel___SpringInterpV2_Force__Const: number;
            RigVMModel___SpringInterpV2_TargetVelocityAmount__Const: number;
            RigVMModel___SetTransform_Item__Const: UE.RigElementKey;
            RigVMModel___SetTransform_Space__Const: UE.ERigVMTransformSpace;
            RigVMModel___SetTransform_Value__Const: UE.Transform;
            RigVMModel___MathTransformRotateVector_1_Vector__Const: UE.Vector;
            RigVMModel___AlphaInterp_1_InRange__Const: UE.InputRange;
            RigVMModel___MathFloatRemap_SourceMaximum__Const: number;
            RigVMModel___MathFloatRemap_TargetMaximum__Const: number;
            RigVMModel___OffsetTransformForItem_1_Item__Const: UE.RigElementKey;
            ProcessFootOffset___ProcessFootOffset_OffsetTransformForItem_2_OffsetTransform__Const: UE.Transform;
            ProcessFootOffset___ProcessFootOffset_GetRelativeTransformForItem_bChildInitial__Const: boolean;
            ProcessFootOffset___ProcessFootOffset_GetRelativeTransformForItem_Parent__Const: UE.RigElementKey;
            ProcessFootOffset___ProcessFootOffset_MathTransformRotateVector_1_1_1_Vector__Const: UE.Vector;
            ProcessFootOffset___ProcessFootOffset_SpringInterpV2_Strength__Const: number;
            ProcessFootOffset___ProcessFootOffset_SpringInterpV2_CriticalDamping__Const: number;
            ProcessFootOffset___ProcessFootOffset_SpringInterpV2_Force__Const: number;
            ProcessFootOffset___ProcessFootOffset_SpringInterpV2_bUseCurrentInput__Const: boolean;
            ProcessFootOffset___ProcessFootOffset_SpringInterpV2_TargetVelocityAmount__Const: number;
            ProcessFootOffset___ProcessFootOffset_SetRotation_Space__Const: UE.ERigVMTransformSpace;
            ProcessFootOffset___ProcessFootOffset_GetTransform_Item__Const: UE.RigElementKey;
            ProcessFootOffset___ProcessFootOffset_AimBoneMath_Primary__Const: UE.RigUnit_AimItem_Target;
            ProcessFootOffset___ProcessFootOffset_AimBoneMath_Secondary__Const: UE.RigUnit_AimItem_Target;
            ProcessFootOffset___ProcessFootOffset_AimBoneMath_DebugSettings__Const: UE.RigUnit_AimBone_DebugSettings;
            ProcessFootOffset_1___ProcessFootOffset_OffsetTransformForItem_2_OffsetTransform__Const: UE.Transform;
            ProcessFootOffset_1___ProcessFootOffset_GetRelativeTransformForItem_bChildInitial__Const: boolean;
            ProcessFootOffset_1___ProcessFootOffset_GetRelativeTransformForItem_Parent__Const: UE.RigElementKey;
            ProcessFootOffset_1___ProcessFootOffset_MathTransformRotateVector_1_1_1_Vector__Const: UE.Vector;
            ProcessFootOffset_1___ProcessFootOffset_SpringInterpV2_Strength__Const: number;
            ProcessFootOffset_1___ProcessFootOffset_SpringInterpV2_CriticalDamping__Const: number;
            ProcessFootOffset_1___ProcessFootOffset_SpringInterpV2_Force__Const: number;
            ProcessFootOffset_1___ProcessFootOffset_SpringInterpV2_bUseCurrentInput__Const: boolean;
            ProcessFootOffset_1___ProcessFootOffset_SpringInterpV2_TargetVelocityAmount__Const: number;
            ProcessFootOffset_1___ProcessFootOffset_SetRotation_Space__Const: UE.ERigVMTransformSpace;
            ProcessFootOffset_1___ProcessFootOffset_GetTransform_Item__Const: UE.RigElementKey;
            ProcessFootOffset_1___ProcessFootOffset_AimBoneMath_Primary__Const: UE.RigUnit_AimItem_Target;
            ProcessFootOffset_1___ProcessFootOffset_AimBoneMath_Secondary__Const: UE.RigUnit_AimItem_Target;
            ProcessFootOffset_1___ProcessFootOffset_AimBoneMath_DebugSettings__Const: UE.RigUnit_AimBone_DebugSettings;
            RigVMModel___DebugTransformMutableItemSpace_2_Mode__Const: UE.ERigUnitDebugTransformMode;
            RigVMModel___DebugTransformMutableItemSpace_2_Color__Const: UE.LinearColor;
            RigVMModel___DebugTransformMutableItemSpace_2_Scale__Const: number;
            RigVMModel___TwoBoneIKSimplePerItem_ItemA__Const: UE.RigElementKey;
            RigVMModel___TwoBoneIKSimplePerItem_ItemB__Const: UE.RigElementKey;
            RigVMModel___TwoBoneIKSimplePerItem_PrimaryAxis__Const: UE.Vector;
            RigVMModel___TwoBoneIKSimplePerItem_SecondaryAxis__Const: UE.Vector;
            RigVMModel___TwoBoneIKSimplePerItem_PoleVectorKind__Const: UE.EControlRigVectorKind;
            RigVMModel___TwoBoneIKSimplePerItem_PoleVectorSpace__Const: UE.RigElementKey;
            RigVMModel___TwoBoneIKSimplePerItem_StretchMaximumRatio__Const: number;
            RigVMModel___TwoBoneIKSimplePerItem_DebugSettings__Const: UE.RigUnit_TwoBoneIKSimple_DebugSettings;
            RigVMModel___TwoBoneIKSimplePerItem_1_ItemA__Const: UE.RigElementKey;
            RigVMModel___TwoBoneIKSimplePerItem_1_ItemB__Const: UE.RigElementKey;
            RigVMModel___TwoBoneIKSimplePerItem_1_PrimaryAxis__Const: UE.Vector;
            RigVMModel___TwoBoneIKSimplePerItem_1_SecondaryAxis__Const: UE.Vector;
            RigVMModel___SetControlOffset_Control__Const: string;
            RigVMModel___SetControlOffset_1_Control__Const: string;
            RigVMModel___SetControlOffset_1_1_Control__Const: string;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_Literal;
            static Load(InName: string): RigVMMemory_Literal;
        
            __tid_RigVMMemory_Literal_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 9CFF95C347624AA0AE106AADCAFF420B
    namespace Game.Characters.Heroes.Mannequin.Rig.CR_Mannequin_FootPlant {
        class RigVMMemory_Work extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            RigVMModel___RigUnit_GetTransform_1_1_2_Transform: UE.Transform;
            RigVMModel___RigUnit_GetTransform_1_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTransform_4_2_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___RigUnit_GetTransform_2_1_Transform: UE.Transform;
            RigVMModel___RigUnit_GetTransform_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTransform_4_1_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___RigUnit_GetTransform_1_1_1_1_1_Transform: UE.Transform;
            RigVMModel___RigUnit_GetTransform_1_1_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTransform_4_2_1_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___RigUnit_GetTransform_1_1_1_2_Transform: UE.Transform;
            RigVMModel___RigUnit_GetTransform_1_1_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTransform_4_2_1_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___ParentConstraint_ChildCache: TArray<UE.CachedRigElement>;
            RigVMModel___ParentConstraint_ParentCaches: TArray<TArray<UE.CachedRigElement>>;
            RigVMModel___ParentConstraint_1_ChildCache: TArray<UE.CachedRigElement>;
            RigVMModel___ParentConstraint_1_ParentCaches: TArray<TArray<UE.CachedRigElement>>;
            RigVMModel___DrawSlope_1_Is_Sloping: boolean;
            RigVMModel___DrawSlope_1_Slope_Angle: UE.Vector;
            DrawSlope_1___DrawSlope_Entry_Rectangle_Size: number;
            DrawSlope_1___DrawSlope_Entry_Rectangle_Thickness: number;
            DrawSlope_1___DrawSlope_Entry_Axis: UE.Vector;
            DrawSlope_1___DrawSlope_Entry_Hit_Radius: number;
            DrawSlope_1___DrawSlope_Entry_Sphere_Radius: number;
            DrawSlope_1___DrawSlope_Entry_Debug_Draw: boolean;
            DrawSlope_1___DrawSlope_Entry_DrawHitPoints: boolean;
            DrawSlope_1___DrawSlope_Return_Is_Sloping: boolean;
            DrawSlope_1___DrawSlope_Return_Slope_Angle: UE.Vector;
            DrawSlope_1___DrawSlope_SphereTraceByTraceChannel_HitLocation: UE.Vector;
            DrawSlope_1___DrawSlope_MathVectorAdd_Result: UE.Vector;
            DrawSlope_1___DrawSlope_RigUnit_GetTransform_5_1_Transform: UE.Transform;
            DrawSlope_1___DrawSlope_RigUnit_GetTransform_5_1_CachedIndex: TArray<UE.CachedRigElement>;
            DrawSlope_1___DrawSlope_MathVectorAdd_A: UE.Vector;
            DrawSlope_1___DrawSlope_MathVectorScale_1_Result: UE.Vector;
            DrawSlope_1___DrawSlope_MathVectorScale_1_Factor: number;
            DrawSlope_1___DrawSlope_MathVectorAdd_1_Result: UE.Vector;
            DrawSlope_1___DrawSlope_MathVectorScale_Result: UE.Vector;
            DrawSlope_1___DrawSlope_SphereTraceByTraceChannel_bHit: boolean;
            DrawSlope_1___DrawSlope_SphereTraceByTraceChannel_HitNormal: UE.Vector;
            DrawSlope_1___DrawSlope_SphereTraceByTraceChannel_1_HitLocation: UE.Vector;
            DrawSlope_1___DrawSlope_MathVectorAdd_2_Result: UE.Vector;
            DrawSlope_1___DrawSlope_RigUnit_GetTransform_5_Transform: UE.Transform;
            DrawSlope_1___DrawSlope_RigUnit_GetTransform_5_CachedIndex: TArray<UE.CachedRigElement>;
            DrawSlope_1___DrawSlope_MathVectorAdd_2_A: UE.Vector;
            DrawSlope_1___DrawSlope_MathVectorAdd_1_1_Result: UE.Vector;
            DrawSlope_1___DrawSlope_SphereTraceByTraceChannel_1_bHit: boolean;
            DrawSlope_1___DrawSlope_SphereTraceByTraceChannel_1_HitNormal: UE.Vector;
            DrawSlope_1___DrawSlope_AimBoneMath_2_Result: UE.Transform;
            DrawSlope_1___DrawSlope_AimBoneMath_2_InputTransform__IO: UE.Transform;
            DrawSlope_1___DrawSlope_AimBoneMath_2_Primary__IO: UE.RigUnit_AimItem_Target;
            DrawSlope_1___DrawSlope_AimBoneMath_2_Secondary__IO: UE.RigUnit_AimItem_Target;
            DrawSlope_1___DrawSlope_AimBoneMath_2_PrimaryCachedSpace: TArray<UE.CachedRigElement>;
            DrawSlope_1___DrawSlope_AimBoneMath_2_SecondaryCachedSpace: TArray<UE.CachedRigElement>;
            DrawSlope_1___DrawSlope_AimBoneMath_2_bIsInitialized: TArray<boolean>;
            DrawSlope_1___DrawSlope_MathQuaternionToEuler_Result: UE.Vector;
            DrawSlope_1___DrawSlope_MathQuaternionToEuler_Value: UE.Quat;
            DrawSlope_1___DrawSlope_MathBoolNot_Result: boolean;
            DrawSlope_1___DrawSlope_MathVectorIsNearlyZero_Result: boolean;
            DrawSlope_1___DrawSlope_MathBoolAnd_Result: boolean;
            DrawSlope_1___DrawSlope_DebugTransformMutableItemSpace_Transform__IO: UE.Transform;
            DrawSlope_1___DrawSlope_DebugTransformMutableItemSpace_1_Transform__IO: UE.Transform;
            DrawSlope_1___DrawSlope_BranchNode_BlockToRun: string;
            DrawSlope_1___DrawSlope_BranchNode_1_BlockToRun: string;
            RigVMModel___MathVectorUnit_Result: UE.Vector;
            RigVMModel___DrawSlope_2_Is_Sloping: boolean;
            RigVMModel___DrawSlope_2_Slope_Angle: UE.Vector;
            DrawSlope_2___DrawSlope_Entry_Rectangle_Size: number;
            DrawSlope_2___DrawSlope_Entry_Rectangle_Thickness: number;
            DrawSlope_2___DrawSlope_Entry_Axis: UE.Vector;
            DrawSlope_2___DrawSlope_Entry_Hit_Radius: number;
            DrawSlope_2___DrawSlope_Entry_Sphere_Radius: number;
            DrawSlope_2___DrawSlope_Entry_Debug_Draw: boolean;
            DrawSlope_2___DrawSlope_Entry_DrawHitPoints: boolean;
            DrawSlope_2___DrawSlope_Return_Is_Sloping: boolean;
            DrawSlope_2___DrawSlope_Return_Slope_Angle: UE.Vector;
            DrawSlope_2___DrawSlope_SphereTraceByTraceChannel_HitLocation: UE.Vector;
            DrawSlope_2___DrawSlope_MathVectorAdd_Result: UE.Vector;
            DrawSlope_2___DrawSlope_RigUnit_GetTransform_5_1_Transform: UE.Transform;
            DrawSlope_2___DrawSlope_RigUnit_GetTransform_5_1_CachedIndex: TArray<UE.CachedRigElement>;
            DrawSlope_2___DrawSlope_MathVectorAdd_A: UE.Vector;
            DrawSlope_2___DrawSlope_MathVectorScale_1_Result: UE.Vector;
            DrawSlope_2___DrawSlope_MathVectorScale_1_Factor: number;
            DrawSlope_2___DrawSlope_MathVectorAdd_1_Result: UE.Vector;
            DrawSlope_2___DrawSlope_MathVectorScale_Result: UE.Vector;
            DrawSlope_2___DrawSlope_SphereTraceByTraceChannel_bHit: boolean;
            DrawSlope_2___DrawSlope_SphereTraceByTraceChannel_HitNormal: UE.Vector;
            DrawSlope_2___DrawSlope_SphereTraceByTraceChannel_1_HitLocation: UE.Vector;
            DrawSlope_2___DrawSlope_MathVectorAdd_2_Result: UE.Vector;
            DrawSlope_2___DrawSlope_RigUnit_GetTransform_5_Transform: UE.Transform;
            DrawSlope_2___DrawSlope_RigUnit_GetTransform_5_CachedIndex: TArray<UE.CachedRigElement>;
            DrawSlope_2___DrawSlope_MathVectorAdd_2_A: UE.Vector;
            DrawSlope_2___DrawSlope_MathVectorAdd_1_1_Result: UE.Vector;
            DrawSlope_2___DrawSlope_SphereTraceByTraceChannel_1_bHit: boolean;
            DrawSlope_2___DrawSlope_SphereTraceByTraceChannel_1_HitNormal: UE.Vector;
            DrawSlope_2___DrawSlope_AimBoneMath_2_Result: UE.Transform;
            DrawSlope_2___DrawSlope_AimBoneMath_2_InputTransform__IO: UE.Transform;
            DrawSlope_2___DrawSlope_AimBoneMath_2_Primary__IO: UE.RigUnit_AimItem_Target;
            DrawSlope_2___DrawSlope_AimBoneMath_2_Secondary__IO: UE.RigUnit_AimItem_Target;
            DrawSlope_2___DrawSlope_AimBoneMath_2_PrimaryCachedSpace: TArray<UE.CachedRigElement>;
            DrawSlope_2___DrawSlope_AimBoneMath_2_SecondaryCachedSpace: TArray<UE.CachedRigElement>;
            DrawSlope_2___DrawSlope_AimBoneMath_2_bIsInitialized: TArray<boolean>;
            DrawSlope_2___DrawSlope_MathQuaternionToEuler_Result: UE.Vector;
            DrawSlope_2___DrawSlope_MathQuaternionToEuler_Value: UE.Quat;
            DrawSlope_2___DrawSlope_MathBoolNot_Result: boolean;
            DrawSlope_2___DrawSlope_MathVectorIsNearlyZero_Result: boolean;
            DrawSlope_2___DrawSlope_MathBoolAnd_Result: boolean;
            DrawSlope_2___DrawSlope_DebugTransformMutableItemSpace_Transform__IO: UE.Transform;
            DrawSlope_2___DrawSlope_DebugTransformMutableItemSpace_1_Transform__IO: UE.Transform;
            DrawSlope_2___DrawSlope_BranchNode_BlockToRun: string;
            DrawSlope_2___DrawSlope_BranchNode_1_BlockToRun: string;
            RigVMModel___DrawSlope_Is_Sloping: boolean;
            RigVMModel___DrawSlope_Slope_Angle: UE.Vector;
            DrawSlope___DrawSlope_Entry_Rectangle_Size: number;
            DrawSlope___DrawSlope_Entry_Rectangle_Thickness: number;
            DrawSlope___DrawSlope_Entry_Axis: UE.Vector;
            DrawSlope___DrawSlope_Entry_Hit_Radius: number;
            DrawSlope___DrawSlope_Entry_Sphere_Radius: number;
            DrawSlope___DrawSlope_Entry_Debug_Draw: boolean;
            DrawSlope___DrawSlope_Entry_DrawHitPoints: boolean;
            DrawSlope___DrawSlope_Return_Is_Sloping: boolean;
            DrawSlope___DrawSlope_Return_Slope_Angle: UE.Vector;
            DrawSlope___DrawSlope_SphereTraceByTraceChannel_HitLocation: UE.Vector;
            DrawSlope___DrawSlope_MathVectorAdd_Result: UE.Vector;
            DrawSlope___DrawSlope_RigUnit_GetTransform_5_1_Transform: UE.Transform;
            DrawSlope___DrawSlope_RigUnit_GetTransform_5_1_CachedIndex: TArray<UE.CachedRigElement>;
            DrawSlope___DrawSlope_MathVectorAdd_A: UE.Vector;
            DrawSlope___DrawSlope_MathVectorScale_1_Result: UE.Vector;
            DrawSlope___DrawSlope_MathVectorScale_1_Factor: number;
            DrawSlope___DrawSlope_MathVectorAdd_1_Result: UE.Vector;
            DrawSlope___DrawSlope_MathVectorScale_Result: UE.Vector;
            DrawSlope___DrawSlope_SphereTraceByTraceChannel_bHit: boolean;
            DrawSlope___DrawSlope_SphereTraceByTraceChannel_HitNormal: UE.Vector;
            DrawSlope___DrawSlope_SphereTraceByTraceChannel_1_HitLocation: UE.Vector;
            DrawSlope___DrawSlope_MathVectorAdd_2_Result: UE.Vector;
            DrawSlope___DrawSlope_RigUnit_GetTransform_5_Transform: UE.Transform;
            DrawSlope___DrawSlope_RigUnit_GetTransform_5_CachedIndex: TArray<UE.CachedRigElement>;
            DrawSlope___DrawSlope_MathVectorAdd_2_A: UE.Vector;
            DrawSlope___DrawSlope_MathVectorAdd_1_1_Result: UE.Vector;
            DrawSlope___DrawSlope_SphereTraceByTraceChannel_1_bHit: boolean;
            DrawSlope___DrawSlope_SphereTraceByTraceChannel_1_HitNormal: UE.Vector;
            DrawSlope___DrawSlope_AimBoneMath_2_Result: UE.Transform;
            DrawSlope___DrawSlope_AimBoneMath_2_InputTransform__IO: UE.Transform;
            DrawSlope___DrawSlope_AimBoneMath_2_Primary__IO: UE.RigUnit_AimItem_Target;
            DrawSlope___DrawSlope_AimBoneMath_2_Secondary__IO: UE.RigUnit_AimItem_Target;
            DrawSlope___DrawSlope_AimBoneMath_2_PrimaryCachedSpace: TArray<UE.CachedRigElement>;
            DrawSlope___DrawSlope_AimBoneMath_2_SecondaryCachedSpace: TArray<UE.CachedRigElement>;
            DrawSlope___DrawSlope_AimBoneMath_2_bIsInitialized: TArray<boolean>;
            DrawSlope___DrawSlope_MathQuaternionToEuler_Result: UE.Vector;
            DrawSlope___DrawSlope_MathQuaternionToEuler_Value: UE.Quat;
            DrawSlope___DrawSlope_MathBoolNot_Result: boolean;
            DrawSlope___DrawSlope_MathVectorIsNearlyZero_Result: boolean;
            DrawSlope___DrawSlope_MathBoolAnd_Result: boolean;
            DrawSlope___DrawSlope_DebugTransformMutableItemSpace_Transform__IO: UE.Transform;
            DrawSlope___DrawSlope_DebugTransformMutableItemSpace_1_Transform__IO: UE.Transform;
            DrawSlope___DrawSlope_BranchNode_BlockToRun: string;
            DrawSlope___DrawSlope_BranchNode_1_BlockToRun: string;
            RigVMModel___MathBoolAnd_Result: boolean;
            RigVMModel___ProcessFootTrace_TargetOffsetZ: number;
            RigVMModel___ProcessFootTrace_NewHitNormal: UE.Vector;
            RigVMModel___ProcessFootTrace_DidTraceHit: boolean;
            ProcessFootTrace___ProcessFootTrace_Entry_Sphere_Radius: number;
            ProcessFootTrace___ProcessFootTrace_MathVectorAdd_5_1_1_2_Result: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_RigUnit_GetTransform_1_1_2_1_2_Transform: UE.Transform;
            ProcessFootTrace___ProcessFootTrace_RigUnit_GetTransform_1_1_2_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            ProcessFootTrace___ProcessFootTrace_MathVectorAdd_5_1_1_2_A: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_MathVectorSub_1_1_1_1_2_Result: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_SphereTraceByTraceChannel_HitLocation: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_SphereTraceByTraceChannel_HitNormal: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_If_2_Result: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_SpringInterpVectorV2_Velocity: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_SpringInterpVectorV2_SimulatedResult: TArray<UE.Vector>;
            ProcessFootTrace___ProcessFootTrace_SpringInterpVectorV2_SpringState: TArray<UE.VectorSpringState>;
            ProcessFootTrace___ProcessFootTrace_If_Result: UE.LinearColor;
            ProcessFootTrace___ProcessFootTrace_If_1_Result: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_DebugTransformMutableItemSpace_Transform__IO: UE.Transform;
            ProcessFootTrace___ProcessFootTrace_MathVectorAdd_Result: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_MathVectorScale_Result: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_BranchNode_BlockToRun: string;
            RigVMModel___ProcessFootTrace_1_TargetOffsetZ: number;
            RigVMModel___ProcessFootTrace_1_NewHitNormal: UE.Vector;
            RigVMModel___ProcessFootTrace_1_DidTraceHit: boolean;
            ProcessFootTrace_1___ProcessFootTrace_Entry_Sphere_Radius: number;
            ProcessFootTrace_1___ProcessFootTrace_MathVectorAdd_5_1_1_2_Result: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_RigUnit_GetTransform_1_1_2_1_2_Transform: UE.Transform;
            ProcessFootTrace_1___ProcessFootTrace_RigUnit_GetTransform_1_1_2_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            ProcessFootTrace_1___ProcessFootTrace_MathVectorAdd_5_1_1_2_A: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_MathVectorSub_1_1_1_1_2_Result: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_SphereTraceByTraceChannel_HitLocation: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_SphereTraceByTraceChannel_HitNormal: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_If_2_Result: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_SpringInterpVectorV2_Velocity: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_SpringInterpVectorV2_SimulatedResult: TArray<UE.Vector>;
            ProcessFootTrace_1___ProcessFootTrace_SpringInterpVectorV2_SpringState: TArray<UE.VectorSpringState>;
            ProcessFootTrace_1___ProcessFootTrace_If_Result: UE.LinearColor;
            ProcessFootTrace_1___ProcessFootTrace_If_1_Result: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_DebugTransformMutableItemSpace_Transform__IO: UE.Transform;
            ProcessFootTrace_1___ProcessFootTrace_MathVectorAdd_Result: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_MathVectorScale_Result: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_BranchNode_BlockToRun: string;
            RigVMModel___SpringInterpV2_Result: number;
            RigVMModel___MathFloatMin_1_Result: number;
            RigVMModel___MathFloatMin_1_A: number;
            RigVMModel___MathFloatMin_1_B: number;
            RigVMModel___SpringInterpV2_Current: number;
            RigVMModel___SpringInterpV2_Velocity: number;
            RigVMModel___SpringInterpV2_SimulatedResult: TArray<number>;
            RigVMModel___SpringInterpV2_SpringState: TArray<UE.FloatSpringState>;
            RigVMModel___MathBoolAnd_1_Result: boolean;
            RigVMModel___MathBoolNot_Result: boolean;
            RigVMModel___MathTransformRotateVector_1_Result: UE.Vector;
            RigVMModel___MathTransformInverse_1_Result: UE.Transform;
            RigVMModel___GetTransform_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___AlphaInterp_1_Result: number;
            RigVMModel___If_1_1_Result: number;
            RigVMModel___AlphaInterp_1_ScaleBiasClamp: TArray<UE.InputScaleBiasClamp>;
            RigVMModel___MathFloatAdd_Result: number;
            RigVMModel___MathFloatAdd_A: number;
            RigVMModel___AlphaInterp_Result: number;
            RigVMModel___If_1_Result: number;
            RigVMModel___MathFloatRemap_Result: number;
            RigVMModel___MathFloatRemap_Value: number;
            RigVMModel___AlphaInterp_ScaleBiasClamp: TArray<UE.InputScaleBiasClamp>;
            RigVMModel___MathTransformRotateVector_1_Vector__IO: UE.Vector;
            RigVMModel___SetTransform_Value__IO: UE.Transform;
            RigVMModel___SetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformRotateVector_1_1_Result: UE.Vector;
            RigVMModel___MathTransformInverse_1_1_Result: UE.Transform;
            RigVMModel___GetTransform_1_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformRotateVector_1_1_Vector__IO: UE.Vector;
            RigVMModel___OffsetTransformForItem_1_OffsetTransform__IO: UE.Transform;
            RigVMModel___OffsetTransformForItem_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___ProcessFootOffset_CurOffsetZ: number;
            RigVMModel___ProcessFootOffset_TargetOffsetZ: number;
            RigVMModel___ProcessFootOffset_NewOffsetZ: number;
            ProcessFootOffset___ProcessFootOffset_MathTransformRotateVector_1_1_1_Result: UE.Vector;
            ProcessFootOffset___ProcessFootOffset_MathTransformInverse_1_1_1_Result: UE.Transform;
            ProcessFootOffset___ProcessFootOffset_GetRelativeTransformForItem_RelativeTransform: UE.Transform;
            ProcessFootOffset___ProcessFootOffset_GetRelativeTransformForItem_CachedChild: TArray<UE.CachedRigElement>;
            ProcessFootOffset___ProcessFootOffset_GetRelativeTransformForItem_CachedParent: TArray<UE.CachedRigElement>;
            ProcessFootOffset___ProcessFootOffset_If_Result: number;
            ProcessFootOffset___ProcessFootOffset_MathFloatSub_Result: number;
            ProcessFootOffset___ProcessFootOffset_MathFloatSub_B: number;
            ProcessFootOffset___ProcessFootOffset_SpringInterpV2_Velocity: number;
            ProcessFootOffset___ProcessFootOffset_SpringInterpV2_SimulatedResult: TArray<number>;
            ProcessFootOffset___ProcessFootOffset_SpringInterpV2_SpringState: TArray<UE.FloatSpringState>;
            ProcessFootOffset___ProcessFootOffset_MathTransformRotateVector_1_1_1_Vector__IO: UE.Vector;
            ProcessFootOffset___ProcessFootOffset_OffsetTransformForItem_2_OffsetTransform__IO: UE.Transform;
            ProcessFootOffset___ProcessFootOffset_OffsetTransformForItem_2_CachedIndex: TArray<UE.CachedRigElement>;
            ProcessFootOffset___ProcessFootOffset_MathQuaternionMul_Result: UE.Quat;
            ProcessFootOffset___ProcessFootOffset_AimBoneMath_Result: UE.Transform;
            ProcessFootOffset___ProcessFootOffset_GetTransform_Transform: UE.Transform;
            ProcessFootOffset___ProcessFootOffset_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            ProcessFootOffset___ProcessFootOffset_AimBoneMath_Primary__IO: UE.RigUnit_AimItem_Target;
            ProcessFootOffset___ProcessFootOffset_AimBoneMath_PrimaryCachedSpace: TArray<UE.CachedRigElement>;
            ProcessFootOffset___ProcessFootOffset_AimBoneMath_SecondaryCachedSpace: TArray<UE.CachedRigElement>;
            ProcessFootOffset___ProcessFootOffset_AimBoneMath_bIsInitialized: TArray<boolean>;
            ProcessFootOffset___ProcessFootOffset_MathQuaternionMul_A: UE.Quat;
            ProcessFootOffset___ProcessFootOffset_MathQuaternionMul_B: UE.Quat;
            ProcessFootOffset___ProcessFootOffset_SetRotation_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___ProcessFootOffset_1_CurOffsetZ: number;
            RigVMModel___ProcessFootOffset_1_TargetOffsetZ: number;
            RigVMModel___ProcessFootOffset_1_NewOffsetZ: number;
            ProcessFootOffset_1___ProcessFootOffset_MathTransformRotateVector_1_1_1_Result: UE.Vector;
            ProcessFootOffset_1___ProcessFootOffset_MathTransformInverse_1_1_1_Result: UE.Transform;
            ProcessFootOffset_1___ProcessFootOffset_GetRelativeTransformForItem_RelativeTransform: UE.Transform;
            ProcessFootOffset_1___ProcessFootOffset_GetRelativeTransformForItem_CachedChild: TArray<UE.CachedRigElement>;
            ProcessFootOffset_1___ProcessFootOffset_GetRelativeTransformForItem_CachedParent: TArray<UE.CachedRigElement>;
            ProcessFootOffset_1___ProcessFootOffset_If_Result: number;
            ProcessFootOffset_1___ProcessFootOffset_MathFloatSub_Result: number;
            ProcessFootOffset_1___ProcessFootOffset_MathFloatSub_B: number;
            ProcessFootOffset_1___ProcessFootOffset_SpringInterpV2_Velocity: number;
            ProcessFootOffset_1___ProcessFootOffset_SpringInterpV2_SimulatedResult: TArray<number>;
            ProcessFootOffset_1___ProcessFootOffset_SpringInterpV2_SpringState: TArray<UE.FloatSpringState>;
            ProcessFootOffset_1___ProcessFootOffset_MathTransformRotateVector_1_1_1_Vector__IO: UE.Vector;
            ProcessFootOffset_1___ProcessFootOffset_OffsetTransformForItem_2_OffsetTransform__IO: UE.Transform;
            ProcessFootOffset_1___ProcessFootOffset_OffsetTransformForItem_2_CachedIndex: TArray<UE.CachedRigElement>;
            ProcessFootOffset_1___ProcessFootOffset_MathQuaternionMul_Result: UE.Quat;
            ProcessFootOffset_1___ProcessFootOffset_AimBoneMath_Result: UE.Transform;
            ProcessFootOffset_1___ProcessFootOffset_GetTransform_Transform: UE.Transform;
            ProcessFootOffset_1___ProcessFootOffset_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            ProcessFootOffset_1___ProcessFootOffset_AimBoneMath_Primary__IO: UE.RigUnit_AimItem_Target;
            ProcessFootOffset_1___ProcessFootOffset_AimBoneMath_PrimaryCachedSpace: TArray<UE.CachedRigElement>;
            ProcessFootOffset_1___ProcessFootOffset_AimBoneMath_SecondaryCachedSpace: TArray<UE.CachedRigElement>;
            ProcessFootOffset_1___ProcessFootOffset_AimBoneMath_bIsInitialized: TArray<boolean>;
            ProcessFootOffset_1___ProcessFootOffset_MathQuaternionMul_A: UE.Quat;
            ProcessFootOffset_1___ProcessFootOffset_MathQuaternionMul_B: UE.Quat;
            ProcessFootOffset_1___ProcessFootOffset_SetRotation_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_9_1_Transform: UE.Transform;
            RigVMModel___GetTransform_9_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTransform_2_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_8_3_Transform: UE.Transform;
            RigVMModel___GetTransform_8_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___RigUnit_GetTransform_2_Transform: UE.Transform;
            RigVMModel___RigUnit_GetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___TwoBoneIKSimplePerItem_PoleVector: UE.Vector;
            RigVMModel___TwoBoneIKSimplePerItem_ItemALength: number;
            RigVMModel___TwoBoneIKSimplePerItem_ItemBLength: number;
            RigVMModel___TwoBoneIKSimplePerItem_CachedItemAIndex: TArray<UE.CachedRigElement>;
            RigVMModel___TwoBoneIKSimplePerItem_CachedItemBIndex: TArray<UE.CachedRigElement>;
            RigVMModel___TwoBoneIKSimplePerItem_CachedEffectorItemIndex: TArray<UE.CachedRigElement>;
            RigVMModel___TwoBoneIKSimplePerItem_CachedPoleVectorSpaceIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_8_1_1_Transform: UE.Transform;
            RigVMModel___GetTransform_8_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___RigUnit_GetTransform_2_2_Transform: UE.Transform;
            RigVMModel___RigUnit_GetTransform_2_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___TwoBoneIKSimplePerItem_1_PoleVector: UE.Vector;
            RigVMModel___TwoBoneIKSimplePerItem_1_ItemALength: number;
            RigVMModel___TwoBoneIKSimplePerItem_1_ItemBLength: number;
            RigVMModel___TwoBoneIKSimplePerItem_1_CachedItemAIndex: TArray<UE.CachedRigElement>;
            RigVMModel___TwoBoneIKSimplePerItem_1_CachedItemBIndex: TArray<UE.CachedRigElement>;
            RigVMModel___TwoBoneIKSimplePerItem_1_CachedEffectorItemIndex: TArray<UE.CachedRigElement>;
            RigVMModel___TwoBoneIKSimplePerItem_1_CachedPoleVectorSpaceIndex: TArray<UE.CachedRigElement>;
            RigVMModel___RigUnit_GetTransform_Transform: UE.Transform;
            RigVMModel___RigUnit_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___RigUnit_GetTransform_1_Transform: UE.Transform;
            RigVMModel___RigUnit_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathVectorLength_Result: number;
            RigVMModel___MathVectorSub_Result: UE.Vector;
            RigVMModel___RigUnit_GetTransform_3_1_Transform: UE.Transform;
            RigVMModel___RigUnit_GetTransform_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathVectorSub_A: UE.Vector;
            RigVMModel___RigUnit_GetTransform_3_Transform: UE.Transform;
            RigVMModel___RigUnit_GetTransform_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathVectorSub_B: UE.Vector;
            RigVMModel___MathVectorLength_1_Result: number;
            RigVMModel___MathVectorSub_1_Result: UE.Vector;
            RigVMModel___RigUnit_GetTransform_3_1_1_Transform: UE.Transform;
            RigVMModel___RigUnit_GetTransform_3_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathVectorSub_1_A: UE.Vector;
            RigVMModel___RigUnit_GetTransform_3_2_Transform: UE.Transform;
            RigVMModel___RigUnit_GetTransform_3_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathVectorSub_1_B: UE.Vector;
            RigVMModel___GetTransform_Transform: UE.Transform;
            RigVMModel___GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetControlOffset_CachedControlIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetControlOffset_1_CachedControlIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_2_Transform: UE.Transform;
            RigVMModel___GetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetControlOffset_1_1_CachedControlIndex: TArray<UE.CachedRigElement>;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_Work;
            static Load(InName: string): RigVMMemory_Work;
        
            __tid_RigVMMemory_Work_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 9CFF95C347624AA0AE106AADCAFF420B
    namespace Game.Characters.Heroes.Mannequin.Rig.CR_Mannequin_FootPlant {
        class RigVMMemory_工作 extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            RigVMModel___RigUnit_GetTransform_1_1_2_Transform: UE.Transform;
            RigVMModel___RigUnit_GetTransform_1_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTransform_4_2_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___RigUnit_GetTransform_2_1_Transform: UE.Transform;
            RigVMModel___RigUnit_GetTransform_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTransform_4_1_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___RigUnit_GetTransform_1_1_1_1_1_Transform: UE.Transform;
            RigVMModel___RigUnit_GetTransform_1_1_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTransform_4_2_1_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___RigUnit_GetTransform_1_1_1_2_Transform: UE.Transform;
            RigVMModel___RigUnit_GetTransform_1_1_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTransform_4_2_1_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___ParentConstraint_ChildCache: TArray<UE.CachedRigElement>;
            RigVMModel___ParentConstraint_ParentCaches: TArray<TArray<UE.CachedRigElement>>;
            RigVMModel___ParentConstraint_1_ChildCache: TArray<UE.CachedRigElement>;
            RigVMModel___ParentConstraint_1_ParentCaches: TArray<TArray<UE.CachedRigElement>>;
            RigVMModel___DrawSlope_1_Is_Sloping: boolean;
            RigVMModel___DrawSlope_1_Slope_Angle: UE.Vector;
            DrawSlope_1___DrawSlope_SphereTraceByTraceChannel_HitLocation: UE.Vector;
            DrawSlope_1___DrawSlope_MathVectorAdd_Result: UE.Vector;
            DrawSlope_1___DrawSlope_RigUnit_GetTransform_5_1_Transform: UE.Transform;
            DrawSlope_1___DrawSlope_RigUnit_GetTransform_5_1_CachedIndex: TArray<UE.CachedRigElement>;
            DrawSlope_1___DrawSlope_MathVectorAdd_A: UE.Vector;
            DrawSlope_1___DrawSlope_MathVectorScale_1_Result: UE.Vector;
            DrawSlope_1___DrawSlope_MathVectorScale_1_Factor: number;
            DrawSlope_1___DrawSlope_MathVectorAdd_1_Result: UE.Vector;
            DrawSlope_1___DrawSlope_MathVectorScale_Result: UE.Vector;
            DrawSlope_1___DrawSlope_SphereTraceByTraceChannel_bHit: boolean;
            DrawSlope_1___DrawSlope_SphereTraceByTraceChannel_HitNormal: UE.Vector;
            DrawSlope_1___DrawSlope_SphereTraceByTraceChannel_1_HitLocation: UE.Vector;
            DrawSlope_1___DrawSlope_MathVectorAdd_2_Result: UE.Vector;
            DrawSlope_1___DrawSlope_RigUnit_GetTransform_5_Transform: UE.Transform;
            DrawSlope_1___DrawSlope_RigUnit_GetTransform_5_CachedIndex: TArray<UE.CachedRigElement>;
            DrawSlope_1___DrawSlope_MathVectorAdd_2_A: UE.Vector;
            DrawSlope_1___DrawSlope_MathVectorAdd_1_1_Result: UE.Vector;
            DrawSlope_1___DrawSlope_SphereTraceByTraceChannel_1_bHit: boolean;
            DrawSlope_1___DrawSlope_SphereTraceByTraceChannel_1_HitNormal: UE.Vector;
            DrawSlope_1___DrawSlope_AimBoneMath_2_Result: UE.Transform;
            DrawSlope_1___DrawSlope_AimBoneMath_2_InputTransform__IO: UE.Transform;
            DrawSlope_1___DrawSlope_AimBoneMath_2_Primary__IO: UE.RigUnit_AimItem_Target;
            DrawSlope_1___DrawSlope_AimBoneMath_2_Secondary__IO: UE.RigUnit_AimItem_Target;
            DrawSlope_1___DrawSlope_AimBoneMath_2_PrimaryCachedSpace: TArray<UE.CachedRigElement>;
            DrawSlope_1___DrawSlope_AimBoneMath_2_SecondaryCachedSpace: TArray<UE.CachedRigElement>;
            DrawSlope_1___DrawSlope_AimBoneMath_2_bIsInitialized: TArray<boolean>;
            DrawSlope_1___DrawSlope_MathQuaternionToEuler_Result: UE.Vector;
            DrawSlope_1___DrawSlope_MathQuaternionToEuler_Value: UE.Quat;
            DrawSlope_1___DrawSlope_MathBoolNot_Result: boolean;
            DrawSlope_1___DrawSlope_MathVectorIsNearlyZero_Result: boolean;
            DrawSlope_1___DrawSlope_MathBoolAnd_Result: boolean;
            DrawSlope_1___DrawSlope_DebugTransformMutableItemSpace_Transform__IO: UE.Transform;
            DrawSlope_1___DrawSlope_DebugTransformMutableItemSpace_1_Transform__IO: UE.Transform;
            DrawSlope_1___DrawSlope_BranchNode_BlockToRun: string;
            DrawSlope_1___DrawSlope_BranchNode_1_BlockToRun: string;
            RigVMModel___MathVectorUnit_Result: UE.Vector;
            RigVMModel___DrawSlope_2_Is_Sloping: boolean;
            RigVMModel___DrawSlope_2_Slope_Angle: UE.Vector;
            DrawSlope_2___DrawSlope_SphereTraceByTraceChannel_HitLocation: UE.Vector;
            DrawSlope_2___DrawSlope_MathVectorAdd_Result: UE.Vector;
            DrawSlope_2___DrawSlope_RigUnit_GetTransform_5_1_Transform: UE.Transform;
            DrawSlope_2___DrawSlope_RigUnit_GetTransform_5_1_CachedIndex: TArray<UE.CachedRigElement>;
            DrawSlope_2___DrawSlope_MathVectorAdd_A: UE.Vector;
            DrawSlope_2___DrawSlope_MathVectorScale_1_Result: UE.Vector;
            DrawSlope_2___DrawSlope_MathVectorScale_1_Factor: number;
            DrawSlope_2___DrawSlope_MathVectorAdd_1_Result: UE.Vector;
            DrawSlope_2___DrawSlope_MathVectorScale_Result: UE.Vector;
            DrawSlope_2___DrawSlope_SphereTraceByTraceChannel_bHit: boolean;
            DrawSlope_2___DrawSlope_SphereTraceByTraceChannel_HitNormal: UE.Vector;
            DrawSlope_2___DrawSlope_SphereTraceByTraceChannel_1_HitLocation: UE.Vector;
            DrawSlope_2___DrawSlope_MathVectorAdd_2_Result: UE.Vector;
            DrawSlope_2___DrawSlope_RigUnit_GetTransform_5_Transform: UE.Transform;
            DrawSlope_2___DrawSlope_RigUnit_GetTransform_5_CachedIndex: TArray<UE.CachedRigElement>;
            DrawSlope_2___DrawSlope_MathVectorAdd_2_A: UE.Vector;
            DrawSlope_2___DrawSlope_MathVectorAdd_1_1_Result: UE.Vector;
            DrawSlope_2___DrawSlope_SphereTraceByTraceChannel_1_bHit: boolean;
            DrawSlope_2___DrawSlope_SphereTraceByTraceChannel_1_HitNormal: UE.Vector;
            DrawSlope_2___DrawSlope_AimBoneMath_2_Result: UE.Transform;
            DrawSlope_2___DrawSlope_AimBoneMath_2_InputTransform__IO: UE.Transform;
            DrawSlope_2___DrawSlope_AimBoneMath_2_Primary__IO: UE.RigUnit_AimItem_Target;
            DrawSlope_2___DrawSlope_AimBoneMath_2_Secondary__IO: UE.RigUnit_AimItem_Target;
            DrawSlope_2___DrawSlope_AimBoneMath_2_PrimaryCachedSpace: TArray<UE.CachedRigElement>;
            DrawSlope_2___DrawSlope_AimBoneMath_2_SecondaryCachedSpace: TArray<UE.CachedRigElement>;
            DrawSlope_2___DrawSlope_AimBoneMath_2_bIsInitialized: TArray<boolean>;
            DrawSlope_2___DrawSlope_MathQuaternionToEuler_Result: UE.Vector;
            DrawSlope_2___DrawSlope_MathQuaternionToEuler_Value: UE.Quat;
            DrawSlope_2___DrawSlope_MathBoolNot_Result: boolean;
            DrawSlope_2___DrawSlope_MathVectorIsNearlyZero_Result: boolean;
            DrawSlope_2___DrawSlope_MathBoolAnd_Result: boolean;
            DrawSlope_2___DrawSlope_DebugTransformMutableItemSpace_Transform__IO: UE.Transform;
            DrawSlope_2___DrawSlope_DebugTransformMutableItemSpace_1_Transform__IO: UE.Transform;
            DrawSlope_2___DrawSlope_BranchNode_BlockToRun: string;
            DrawSlope_2___DrawSlope_BranchNode_1_BlockToRun: string;
            RigVMModel___DrawSlope_Is_Sloping: boolean;
            RigVMModel___DrawSlope_Slope_Angle: UE.Vector;
            DrawSlope___DrawSlope_SphereTraceByTraceChannel_HitLocation: UE.Vector;
            DrawSlope___DrawSlope_MathVectorAdd_Result: UE.Vector;
            DrawSlope___DrawSlope_RigUnit_GetTransform_5_1_Transform: UE.Transform;
            DrawSlope___DrawSlope_RigUnit_GetTransform_5_1_CachedIndex: TArray<UE.CachedRigElement>;
            DrawSlope___DrawSlope_MathVectorAdd_A: UE.Vector;
            DrawSlope___DrawSlope_MathVectorScale_1_Result: UE.Vector;
            DrawSlope___DrawSlope_MathVectorScale_1_Factor: number;
            DrawSlope___DrawSlope_MathVectorAdd_1_Result: UE.Vector;
            DrawSlope___DrawSlope_MathVectorScale_Result: UE.Vector;
            DrawSlope___DrawSlope_SphereTraceByTraceChannel_bHit: boolean;
            DrawSlope___DrawSlope_SphereTraceByTraceChannel_HitNormal: UE.Vector;
            DrawSlope___DrawSlope_SphereTraceByTraceChannel_1_HitLocation: UE.Vector;
            DrawSlope___DrawSlope_MathVectorAdd_2_Result: UE.Vector;
            DrawSlope___DrawSlope_RigUnit_GetTransform_5_Transform: UE.Transform;
            DrawSlope___DrawSlope_RigUnit_GetTransform_5_CachedIndex: TArray<UE.CachedRigElement>;
            DrawSlope___DrawSlope_MathVectorAdd_2_A: UE.Vector;
            DrawSlope___DrawSlope_MathVectorAdd_1_1_Result: UE.Vector;
            DrawSlope___DrawSlope_SphereTraceByTraceChannel_1_bHit: boolean;
            DrawSlope___DrawSlope_SphereTraceByTraceChannel_1_HitNormal: UE.Vector;
            DrawSlope___DrawSlope_AimBoneMath_2_Result: UE.Transform;
            DrawSlope___DrawSlope_AimBoneMath_2_InputTransform__IO: UE.Transform;
            DrawSlope___DrawSlope_AimBoneMath_2_Primary__IO: UE.RigUnit_AimItem_Target;
            DrawSlope___DrawSlope_AimBoneMath_2_Secondary__IO: UE.RigUnit_AimItem_Target;
            DrawSlope___DrawSlope_AimBoneMath_2_PrimaryCachedSpace: TArray<UE.CachedRigElement>;
            DrawSlope___DrawSlope_AimBoneMath_2_SecondaryCachedSpace: TArray<UE.CachedRigElement>;
            DrawSlope___DrawSlope_AimBoneMath_2_bIsInitialized: TArray<boolean>;
            DrawSlope___DrawSlope_MathQuaternionToEuler_Result: UE.Vector;
            DrawSlope___DrawSlope_MathQuaternionToEuler_Value: UE.Quat;
            DrawSlope___DrawSlope_MathBoolNot_Result: boolean;
            DrawSlope___DrawSlope_MathVectorIsNearlyZero_Result: boolean;
            DrawSlope___DrawSlope_MathBoolAnd_Result: boolean;
            DrawSlope___DrawSlope_DebugTransformMutableItemSpace_Transform__IO: UE.Transform;
            DrawSlope___DrawSlope_DebugTransformMutableItemSpace_1_Transform__IO: UE.Transform;
            DrawSlope___DrawSlope_BranchNode_BlockToRun: string;
            DrawSlope___DrawSlope_BranchNode_1_BlockToRun: string;
            RigVMModel___MathBoolAnd_Result: boolean;
            RigVMModel___ProcessFootTrace_TargetOffsetZ: number;
            RigVMModel___ProcessFootTrace_NewHitNormal: UE.Vector;
            RigVMModel___ProcessFootTrace_DidTraceHit: boolean;
            ProcessFootTrace___ProcessFootTrace_MathVectorAdd_5_1_1_2_Result: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_RigUnit_GetTransform_1_1_2_1_2_Transform: UE.Transform;
            ProcessFootTrace___ProcessFootTrace_RigUnit_GetTransform_1_1_2_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            ProcessFootTrace___ProcessFootTrace_MathVectorAdd_5_1_1_2_A: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_MathVectorSub_1_1_1_1_2_Result: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_SphereTraceByTraceChannel_HitLocation: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_SphereTraceByTraceChannel_HitNormal: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_If_2_Result: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_If_2_Condition: boolean;
            ProcessFootTrace___ProcessFootTrace_SpringInterpVectorV2_Velocity: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_SpringInterpVectorV2_SimulatedResult: TArray<UE.Vector>;
            ProcessFootTrace___ProcessFootTrace_SpringInterpVectorV2_SpringState: TArray<UE.VectorSpringState>;
            ProcessFootTrace___ProcessFootTrace_If_Result: UE.LinearColor;
            ProcessFootTrace___ProcessFootTrace_If_1_Result: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_If_1_Condition: boolean;
            ProcessFootTrace___ProcessFootTrace_DebugTransformMutableItemSpace_Transform__IO: UE.Transform;
            ProcessFootTrace___ProcessFootTrace_RerouteNode_17_Elements: UE.Transform;
            ProcessFootTrace___ProcessFootTrace_DebugLineItemSpace_1_A: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_MathVectorAdd_Result: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_MathVectorScale_Result: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_BranchNode_BlockToRun: string;
            ProcessFootTrace___ProcessFootTrace_RerouteNode_16_Elements: UE.Vector;
            RigVMModel___ProcessFootTrace_1_TargetOffsetZ: number;
            RigVMModel___ProcessFootTrace_1_NewHitNormal: UE.Vector;
            RigVMModel___ProcessFootTrace_1_DidTraceHit: boolean;
            ProcessFootTrace_1___ProcessFootTrace_MathVectorAdd_5_1_1_2_Result: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_RigUnit_GetTransform_1_1_2_1_2_Transform: UE.Transform;
            ProcessFootTrace_1___ProcessFootTrace_RigUnit_GetTransform_1_1_2_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            ProcessFootTrace_1___ProcessFootTrace_MathVectorAdd_5_1_1_2_A: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_MathVectorSub_1_1_1_1_2_Result: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_SphereTraceByTraceChannel_HitLocation: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_SphereTraceByTraceChannel_HitNormal: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_If_2_Result: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_If_2_Condition: boolean;
            ProcessFootTrace_1___ProcessFootTrace_SpringInterpVectorV2_Velocity: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_SpringInterpVectorV2_SimulatedResult: TArray<UE.Vector>;
            ProcessFootTrace_1___ProcessFootTrace_SpringInterpVectorV2_SpringState: TArray<UE.VectorSpringState>;
            ProcessFootTrace_1___ProcessFootTrace_If_Result: UE.LinearColor;
            ProcessFootTrace_1___ProcessFootTrace_If_1_Result: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_If_1_Condition: boolean;
            ProcessFootTrace_1___ProcessFootTrace_DebugTransformMutableItemSpace_Transform__IO: UE.Transform;
            ProcessFootTrace_1___ProcessFootTrace_RerouteNode_17_Elements: UE.Transform;
            ProcessFootTrace_1___ProcessFootTrace_DebugLineItemSpace_1_A: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_MathVectorAdd_Result: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_MathVectorScale_Result: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_BranchNode_BlockToRun: string;
            ProcessFootTrace_1___ProcessFootTrace_RerouteNode_16_Elements: UE.Vector;
            RigVMModel___SpringInterpV2_Result: number;
            RigVMModel___MathFloatMin_1_Result: number;
            RigVMModel___MathFloatMin_1_A: number;
            RigVMModel___MathFloatMin_1_B: number;
            RigVMModel___SpringInterpV2_Current: number;
            RigVMModel___SpringInterpV2_Velocity: number;
            RigVMModel___SpringInterpV2_SimulatedResult: TArray<number>;
            RigVMModel___SpringInterpV2_SpringState: TArray<UE.FloatSpringState>;
            RigVMModel___MathBoolAnd_1_Result: boolean;
            RigVMModel___MathBoolNot_Result: boolean;
            RigVMModel___MathTransformRotateVector_1_Result: UE.Vector;
            RigVMModel___MathTransformInverse_1_Result: UE.Transform;
            RigVMModel___GetTransform_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___AlphaInterp_1_Result: number;
            RigVMModel___If_1_1_Result: number;
            RigVMModel___AlphaInterp_1_ScaleBiasClamp: TArray<UE.InputScaleBiasClamp>;
            RigVMModel___MathFloatAdd_Result: number;
            RigVMModel___MathFloatAdd_A: number;
            RigVMModel___AlphaInterp_Result: number;
            RigVMModel___If_1_Result: number;
            RigVMModel___If_1_Condition: boolean;
            RigVMModel___MathFloatRemap_Result: number;
            RigVMModel___MathFloatRemap_Value: number;
            RigVMModel___AlphaInterp_ScaleBiasClamp: TArray<UE.InputScaleBiasClamp>;
            RigVMModel___MathTransformRotateVector_1_Vector__IO: UE.Vector;
            RigVMModel___SetTransform_Value__IO: UE.Transform;
            RigVMModel___SetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformRotateVector_1_1_Result: UE.Vector;
            RigVMModel___MathTransformInverse_1_1_Result: UE.Transform;
            RigVMModel___GetTransform_1_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformRotateVector_1_1_Vector__IO: UE.Vector;
            RigVMModel___OffsetTransformForItem_1_OffsetTransform__IO: UE.Transform;
            RigVMModel___OffsetTransformForItem_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___ProcessFootOffset_CurOffsetZ: number;
            RigVMModel___ProcessFootOffset_TargetOffsetZ: number;
            RigVMModel___ProcessFootOffset_NewOffsetZ: number;
            ProcessFootOffset___ProcessFootOffset_MathTransformRotateVector_1_1_1_Result: UE.Vector;
            ProcessFootOffset___ProcessFootOffset_MathTransformInverse_1_1_1_Result: UE.Transform;
            ProcessFootOffset___ProcessFootOffset_GetRelativeTransformForItem_RelativeTransform: UE.Transform;
            ProcessFootOffset___ProcessFootOffset_GetRelativeTransformForItem_CachedChild: TArray<UE.CachedRigElement>;
            ProcessFootOffset___ProcessFootOffset_GetRelativeTransformForItem_CachedParent: TArray<UE.CachedRigElement>;
            ProcessFootOffset___ProcessFootOffset_If_Result: number;
            ProcessFootOffset___ProcessFootOffset_If_Condition: boolean;
            ProcessFootOffset___ProcessFootOffset_MathFloatSub_Result: number;
            ProcessFootOffset___ProcessFootOffset_MathFloatSub_B: number;
            ProcessFootOffset___ProcessFootOffset_SpringInterpV2_Velocity: number;
            ProcessFootOffset___ProcessFootOffset_SpringInterpV2_SimulatedResult: TArray<number>;
            ProcessFootOffset___ProcessFootOffset_SpringInterpV2_SpringState: TArray<UE.FloatSpringState>;
            ProcessFootOffset___ProcessFootOffset_MathTransformRotateVector_1_1_1_Vector__IO: UE.Vector;
            ProcessFootOffset___ProcessFootOffset_OffsetTransformForItem_2_OffsetTransform__IO: UE.Transform;
            ProcessFootOffset___ProcessFootOffset_OffsetTransformForItem_2_CachedIndex: TArray<UE.CachedRigElement>;
            ProcessFootOffset___ProcessFootOffset_MathQuaternionMul_Result: UE.Quat;
            ProcessFootOffset___ProcessFootOffset_AimBoneMath_Result: UE.Transform;
            ProcessFootOffset___ProcessFootOffset_GetTransform_Transform: UE.Transform;
            ProcessFootOffset___ProcessFootOffset_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            ProcessFootOffset___ProcessFootOffset_AimBoneMath_Primary__IO: UE.RigUnit_AimItem_Target;
            ProcessFootOffset___ProcessFootOffset_AimBoneMath_PrimaryCachedSpace: TArray<UE.CachedRigElement>;
            ProcessFootOffset___ProcessFootOffset_AimBoneMath_SecondaryCachedSpace: TArray<UE.CachedRigElement>;
            ProcessFootOffset___ProcessFootOffset_AimBoneMath_bIsInitialized: TArray<boolean>;
            ProcessFootOffset___ProcessFootOffset_MathQuaternionMul_A: UE.Quat;
            ProcessFootOffset___ProcessFootOffset_MathQuaternionMul_B: UE.Quat;
            ProcessFootOffset___ProcessFootOffset_SetRotation_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___ProcessFootOffset_1_CurOffsetZ: number;
            RigVMModel___ProcessFootOffset_1_TargetOffsetZ: number;
            RigVMModel___ProcessFootOffset_1_NewOffsetZ: number;
            ProcessFootOffset_1___ProcessFootOffset_MathTransformRotateVector_1_1_1_Result: UE.Vector;
            ProcessFootOffset_1___ProcessFootOffset_MathTransformInverse_1_1_1_Result: UE.Transform;
            ProcessFootOffset_1___ProcessFootOffset_GetRelativeTransformForItem_RelativeTransform: UE.Transform;
            ProcessFootOffset_1___ProcessFootOffset_GetRelativeTransformForItem_CachedChild: TArray<UE.CachedRigElement>;
            ProcessFootOffset_1___ProcessFootOffset_GetRelativeTransformForItem_CachedParent: TArray<UE.CachedRigElement>;
            ProcessFootOffset_1___ProcessFootOffset_If_Result: number;
            ProcessFootOffset_1___ProcessFootOffset_If_Condition: boolean;
            ProcessFootOffset_1___ProcessFootOffset_MathFloatSub_Result: number;
            ProcessFootOffset_1___ProcessFootOffset_MathFloatSub_B: number;
            ProcessFootOffset_1___ProcessFootOffset_SpringInterpV2_Velocity: number;
            ProcessFootOffset_1___ProcessFootOffset_SpringInterpV2_SimulatedResult: TArray<number>;
            ProcessFootOffset_1___ProcessFootOffset_SpringInterpV2_SpringState: TArray<UE.FloatSpringState>;
            ProcessFootOffset_1___ProcessFootOffset_MathTransformRotateVector_1_1_1_Vector__IO: UE.Vector;
            ProcessFootOffset_1___ProcessFootOffset_OffsetTransformForItem_2_OffsetTransform__IO: UE.Transform;
            ProcessFootOffset_1___ProcessFootOffset_OffsetTransformForItem_2_CachedIndex: TArray<UE.CachedRigElement>;
            ProcessFootOffset_1___ProcessFootOffset_MathQuaternionMul_Result: UE.Quat;
            ProcessFootOffset_1___ProcessFootOffset_AimBoneMath_Result: UE.Transform;
            ProcessFootOffset_1___ProcessFootOffset_GetTransform_Transform: UE.Transform;
            ProcessFootOffset_1___ProcessFootOffset_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            ProcessFootOffset_1___ProcessFootOffset_AimBoneMath_Primary__IO: UE.RigUnit_AimItem_Target;
            ProcessFootOffset_1___ProcessFootOffset_AimBoneMath_PrimaryCachedSpace: TArray<UE.CachedRigElement>;
            ProcessFootOffset_1___ProcessFootOffset_AimBoneMath_SecondaryCachedSpace: TArray<UE.CachedRigElement>;
            ProcessFootOffset_1___ProcessFootOffset_AimBoneMath_bIsInitialized: TArray<boolean>;
            ProcessFootOffset_1___ProcessFootOffset_MathQuaternionMul_A: UE.Quat;
            ProcessFootOffset_1___ProcessFootOffset_MathQuaternionMul_B: UE.Quat;
            ProcessFootOffset_1___ProcessFootOffset_SetRotation_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_9_1_Transform: UE.Transform;
            RigVMModel___GetTransform_9_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTransform_2_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_8_3_Transform: UE.Transform;
            RigVMModel___GetTransform_8_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___RigUnit_GetTransform_2_Transform: UE.Transform;
            RigVMModel___RigUnit_GetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___TwoBoneIKSimplePerItem_PoleVector: UE.Vector;
            RigVMModel___TwoBoneIKSimplePerItem_ItemALength: number;
            RigVMModel___TwoBoneIKSimplePerItem_ItemBLength: number;
            RigVMModel___TwoBoneIKSimplePerItem_CachedItemAIndex: TArray<UE.CachedRigElement>;
            RigVMModel___TwoBoneIKSimplePerItem_CachedItemBIndex: TArray<UE.CachedRigElement>;
            RigVMModel___TwoBoneIKSimplePerItem_CachedEffectorItemIndex: TArray<UE.CachedRigElement>;
            RigVMModel___TwoBoneIKSimplePerItem_CachedPoleVectorSpaceIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_8_1_1_Transform: UE.Transform;
            RigVMModel___GetTransform_8_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___RigUnit_GetTransform_2_2_Transform: UE.Transform;
            RigVMModel___RigUnit_GetTransform_2_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___TwoBoneIKSimplePerItem_1_PoleVector: UE.Vector;
            RigVMModel___TwoBoneIKSimplePerItem_1_ItemALength: number;
            RigVMModel___TwoBoneIKSimplePerItem_1_ItemBLength: number;
            RigVMModel___TwoBoneIKSimplePerItem_1_CachedItemAIndex: TArray<UE.CachedRigElement>;
            RigVMModel___TwoBoneIKSimplePerItem_1_CachedItemBIndex: TArray<UE.CachedRigElement>;
            RigVMModel___TwoBoneIKSimplePerItem_1_CachedEffectorItemIndex: TArray<UE.CachedRigElement>;
            RigVMModel___TwoBoneIKSimplePerItem_1_CachedPoleVectorSpaceIndex: TArray<UE.CachedRigElement>;
            RigVMModel___RigUnit_GetTransform_Transform: UE.Transform;
            RigVMModel___RigUnit_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___RigUnit_GetTransform_1_Transform: UE.Transform;
            RigVMModel___RigUnit_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathVectorLength_Result: number;
            RigVMModel___MathVectorSub_Result: UE.Vector;
            RigVMModel___RigUnit_GetTransform_3_1_Transform: UE.Transform;
            RigVMModel___RigUnit_GetTransform_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathVectorSub_A: UE.Vector;
            RigVMModel___RigUnit_GetTransform_3_Transform: UE.Transform;
            RigVMModel___RigUnit_GetTransform_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathVectorSub_B: UE.Vector;
            RigVMModel___MathVectorLength_1_Result: number;
            RigVMModel___MathVectorSub_1_Result: UE.Vector;
            RigVMModel___RigUnit_GetTransform_3_1_1_Transform: UE.Transform;
            RigVMModel___RigUnit_GetTransform_3_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathVectorSub_1_A: UE.Vector;
            RigVMModel___RigUnit_GetTransform_3_2_Transform: UE.Transform;
            RigVMModel___RigUnit_GetTransform_3_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathVectorSub_1_B: UE.Vector;
            RigVMModel___GetTransform_Transform: UE.Transform;
            RigVMModel___GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetControlOffset_CachedControlIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetControlOffset_1_CachedControlIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_2_Transform: UE.Transform;
            RigVMModel___GetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetControlOffset_1_1_CachedControlIndex: TArray<UE.CachedRigElement>;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_工作;
            static Load(InName: string): RigVMMemory_工作;
        
            __tid_RigVMMemory_工作_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 9CFF95C347624AA0AE106AADCAFF420B
    namespace Game.Characters.Heroes.Mannequin.Rig.CR_Mannequin_FootPlant {
        class RigVMMemory_文字 extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            RigVMModel___SetTransform_4_2_1_2_Item__Const: UE.RigElementKey;
            RigVMModel___SetTransform_4_2_1_2_Space__Const: UE.ERigVMTransformSpace;
            RigVMModel___SetTransform_4_2_1_2_bInitial__Const: boolean;
            RigVMModel___RigUnit_GetTransform_1_1_2_Item__Const: UE.RigElementKey;
            RigVMModel___SetTransform_4_2_1_2_Weight__Const: number;
            RigVMModel___SetTransform_4_2_1_2_bPropagateToChildren__Const: boolean;
            RigVMModel___SetTransform_4_1_1_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___RigUnit_GetTransform_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetTransform_4_2_1_1_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___RigUnit_GetTransform_1_1_1_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetTransform_4_2_1_1_2_Item__Const: UE.RigElementKey;
            RigVMModel___RigUnit_GetTransform_1_1_1_2_Item__Const: UE.RigElementKey;
            RigVMModel___ParentConstraint_Child__Const: UE.RigElementKey;
            RigVMModel___ParentConstraint_Filter__Const: UE.TransformFilter;
            RigVMModel___ParentConstraint_Parents__Const: TArray<UE.ConstraintParent>;
            RigVMModel___ParentConstraint_AdvancedSettings__Const: UE.RigUnit_ParentConstraint_AdvancedSettings;
            RigVMModel___ParentConstraint_1_Child__Const: UE.RigElementKey;
            RigVMModel___ParentConstraint_1_Parents__Const: TArray<UE.ConstraintParent>;
            RigVMModel___DrawSlope_1_Item__Const: UE.RigElementKey;
            RigVMModel___DrawSlope_1_Color__Const: UE.LinearColor;
            RigVMModel___DrawSlope_1_Rectangle_Size__Const: number;
            RigVMModel___DrawSlope_1_Rectangle_Thickness__Const: number;
            RigVMModel___DrawSlope_1_Axis__Const: UE.Vector;
            RigVMModel___DrawSlope_1_Hit_Radius__Const: number;
            LocalVariableDefault__DrawSlope_hitPoints__Const: TArray<UE.Vector>;
            LocalVariableDefault__DrawSlope_ArrayIterator_Array__Const: TArray<UE.Vector>;
            LocalVariableDefault__DrawSlope_isSloping__Const: boolean;
            LocalVariableDefault__DrawSlope_slopeAngle__Const: UE.Vector;
            LocalVariableDefault__DrawSlope_hitPoint__Const: UE.Vector;
            LocalVariableDefault__DrawSlope_HitNormal__Const: UE.Vector;
            LocalVariableDefault__DrawSlope_HitLocation__Const: UE.Vector;
            LocalVariableDefault__DrawSlope_MathVectorClampSpatially_Result__Const: UE.Vector;
            DrawSlope_1___DrawSlope_RigUnit_GetTransform_5_1_Space__Const: UE.ERigVMTransformSpace;
            DrawSlope_1___DrawSlope_RigUnit_GetTransform_5_1_bInitial__Const: boolean;
            DrawSlope_1___DrawSlope_MathVectorScale_Factor__Const: number;
            DrawSlope_1___DrawSlope_SphereTraceByTraceChannel_TraceChannel__Const: UE.ETraceTypeQuery;
            DrawSlope_1___DrawSlope_MathVectorAdd_2_B__Const: UE.Vector;
            DrawSlope_1___DrawSlope_MathVectorAdd_1_1_B__Const: UE.Vector;
            DrawSlope_1___DrawSlope_AimBoneMath_2_InputTransform__Const: UE.Transform;
            DrawSlope_1___DrawSlope_AimBoneMath_2_Primary__Const: UE.RigUnit_AimItem_Target;
            DrawSlope_1___DrawSlope_AimBoneMath_2_Secondary__Const: UE.RigUnit_AimItem_Target;
            DrawSlope_1___DrawSlope_AimBoneMath_2_Weight__Const: number;
            DrawSlope_1___DrawSlope_AimBoneMath_2_DebugSettings__Const: UE.RigUnit_AimBone_DebugSettings;
            DrawSlope_1___DrawSlope_MathQuaternionToEuler_RotationOrder__Const: UE.EEulerRotationOrder;
            DrawSlope_1___DrawSlope_MathVectorIsNearlyZero_Tolerance__Const: number;
            DrawSlope_1___DrawSlope_DebugRectangleItemSpace_bEnabled__Const: boolean;
            DrawSlope_1___DrawSlope_DebugLineItemSpace_Color__Const: UE.LinearColor;
            DrawSlope_1___DrawSlope_DebugLineItemSpace_Thickness__Const: number;
            DrawSlope_1___DrawSlope_DebugTransformMutableItemSpace_Mode__Const: UE.ERigUnitDebugTransformMode;
            DrawSlope_1___DrawSlope_DebugTransformMutableItemSpace_Thickness__Const: number;
            DrawSlope_1___DrawSlope_DebugTransformMutableItemSpace_Scale__Const: number;
            RigVMModel___DrawSlope_2_Item__Const: UE.RigElementKey;
            DrawSlope_2___DrawSlope_RigUnit_GetTransform_5_1_Space__Const: UE.ERigVMTransformSpace;
            DrawSlope_2___DrawSlope_RigUnit_GetTransform_5_1_bInitial__Const: boolean;
            DrawSlope_2___DrawSlope_MathVectorScale_Factor__Const: number;
            DrawSlope_2___DrawSlope_SphereTraceByTraceChannel_TraceChannel__Const: UE.ETraceTypeQuery;
            DrawSlope_2___DrawSlope_MathVectorAdd_2_B__Const: UE.Vector;
            DrawSlope_2___DrawSlope_MathVectorAdd_1_1_B__Const: UE.Vector;
            DrawSlope_2___DrawSlope_AimBoneMath_2_InputTransform__Const: UE.Transform;
            DrawSlope_2___DrawSlope_AimBoneMath_2_Primary__Const: UE.RigUnit_AimItem_Target;
            DrawSlope_2___DrawSlope_AimBoneMath_2_Secondary__Const: UE.RigUnit_AimItem_Target;
            DrawSlope_2___DrawSlope_AimBoneMath_2_Weight__Const: number;
            DrawSlope_2___DrawSlope_AimBoneMath_2_DebugSettings__Const: UE.RigUnit_AimBone_DebugSettings;
            DrawSlope_2___DrawSlope_MathQuaternionToEuler_RotationOrder__Const: UE.EEulerRotationOrder;
            DrawSlope_2___DrawSlope_MathVectorIsNearlyZero_Tolerance__Const: number;
            DrawSlope_2___DrawSlope_DebugRectangleItemSpace_bEnabled__Const: boolean;
            DrawSlope_2___DrawSlope_DebugLineItemSpace_Color__Const: UE.LinearColor;
            DrawSlope_2___DrawSlope_DebugLineItemSpace_Thickness__Const: number;
            DrawSlope_2___DrawSlope_DebugTransformMutableItemSpace_Mode__Const: UE.ERigUnitDebugTransformMode;
            DrawSlope_2___DrawSlope_DebugTransformMutableItemSpace_Thickness__Const: number;
            DrawSlope_2___DrawSlope_DebugTransformMutableItemSpace_Scale__Const: number;
            DrawSlope___DrawSlope_RigUnit_GetTransform_5_1_Space__Const: UE.ERigVMTransformSpace;
            DrawSlope___DrawSlope_RigUnit_GetTransform_5_1_bInitial__Const: boolean;
            DrawSlope___DrawSlope_MathVectorScale_Factor__Const: number;
            DrawSlope___DrawSlope_SphereTraceByTraceChannel_TraceChannel__Const: UE.ETraceTypeQuery;
            DrawSlope___DrawSlope_MathVectorAdd_2_B__Const: UE.Vector;
            DrawSlope___DrawSlope_MathVectorAdd_1_1_B__Const: UE.Vector;
            DrawSlope___DrawSlope_AimBoneMath_2_InputTransform__Const: UE.Transform;
            DrawSlope___DrawSlope_AimBoneMath_2_Primary__Const: UE.RigUnit_AimItem_Target;
            DrawSlope___DrawSlope_AimBoneMath_2_Secondary__Const: UE.RigUnit_AimItem_Target;
            DrawSlope___DrawSlope_AimBoneMath_2_Weight__Const: number;
            DrawSlope___DrawSlope_AimBoneMath_2_DebugSettings__Const: UE.RigUnit_AimBone_DebugSettings;
            DrawSlope___DrawSlope_MathQuaternionToEuler_RotationOrder__Const: UE.EEulerRotationOrder;
            DrawSlope___DrawSlope_MathVectorIsNearlyZero_Tolerance__Const: number;
            DrawSlope___DrawSlope_DebugRectangleItemSpace_bEnabled__Const: boolean;
            DrawSlope___DrawSlope_DebugLineItemSpace_Color__Const: UE.LinearColor;
            DrawSlope___DrawSlope_DebugLineItemSpace_Thickness__Const: number;
            DrawSlope___DrawSlope_DebugTransformMutableItemSpace_Mode__Const: UE.ERigUnitDebugTransformMode;
            DrawSlope___DrawSlope_DebugTransformMutableItemSpace_Thickness__Const: number;
            DrawSlope___DrawSlope_DebugTransformMutableItemSpace_Scale__Const: number;
            RigVMModel___ProcessFootTrace_Sphere_Radius__Const: number;
            ProcessFootTrace___ProcessFootTrace_RigUnit_GetTransform_1_1_2_1_2_Space__Const: UE.ERigVMTransformSpace;
            ProcessFootTrace___ProcessFootTrace_RigUnit_GetTransform_1_1_2_1_2_bInitial__Const: boolean;
            ProcessFootTrace___ProcessFootTrace_MathVectorAdd_5_1_1_2_B__Const: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_RigUnit_VisualDebugVectorItemSpace_3_bEnabled__Const: boolean;
            ProcessFootTrace___ProcessFootTrace_RigUnit_VisualDebugVectorItemSpace_3_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            ProcessFootTrace___ProcessFootTrace_RigUnit_VisualDebugVectorItemSpace_3_Color__Const: UE.LinearColor;
            ProcessFootTrace___ProcessFootTrace_RigUnit_VisualDebugVectorItemSpace_3_Thickness__Const: number;
            ProcessFootTrace___ProcessFootTrace_RigUnit_VisualDebugVectorItemSpace_3_Scale__Const: number;
            ProcessFootTrace___ProcessFootTrace_RigUnit_VisualDebugVectorItemSpace_1_2_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            ProcessFootTrace___ProcessFootTrace_SphereTraceByTraceChannel_TraceChannel__Const: UE.ETraceTypeQuery;
            ProcessFootTrace___ProcessFootTrace_If_2_False__Const: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_SpringInterpVectorV2_Strength__Const: number;
            ProcessFootTrace___ProcessFootTrace_SpringInterpVectorV2_Force__Const: UE.Vector;
            ProcessFootTrace___ProcessFootTrace_SpringInterpVectorV2_TargetVelocityAmount__Const: number;
            ProcessFootTrace___ProcessFootTrace_If_True__Const: UE.LinearColor;
            ProcessFootTrace___ProcessFootTrace_If_False__Const: UE.LinearColor;
            ProcessFootTrace___ProcessFootTrace_DebugLineItemSpace_WorldOffset__Const: UE.Transform;
            ProcessFootTrace___ProcessFootTrace_DebugTransformMutableItemSpace_Mode__Const: UE.ERigUnitDebugTransformMode;
            ProcessFootTrace___ProcessFootTrace_DebugTransformMutableItemSpace_Scale__Const: number;
            ProcessFootTrace___ProcessFootTrace_MathVectorScale_Factor__Const: number;
            ProcessFootTrace___ProcessFootTrace_DebugLineItemSpace_1_Thickness__Const: number;
            ProcessFootTrace_1___ProcessFootTrace_RigUnit_GetTransform_1_1_2_1_2_Space__Const: UE.ERigVMTransformSpace;
            ProcessFootTrace_1___ProcessFootTrace_RigUnit_GetTransform_1_1_2_1_2_bInitial__Const: boolean;
            ProcessFootTrace_1___ProcessFootTrace_MathVectorAdd_5_1_1_2_B__Const: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_RigUnit_VisualDebugVectorItemSpace_3_bEnabled__Const: boolean;
            ProcessFootTrace_1___ProcessFootTrace_RigUnit_VisualDebugVectorItemSpace_3_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            ProcessFootTrace_1___ProcessFootTrace_RigUnit_VisualDebugVectorItemSpace_3_Color__Const: UE.LinearColor;
            ProcessFootTrace_1___ProcessFootTrace_RigUnit_VisualDebugVectorItemSpace_3_Thickness__Const: number;
            ProcessFootTrace_1___ProcessFootTrace_RigUnit_VisualDebugVectorItemSpace_3_Scale__Const: number;
            ProcessFootTrace_1___ProcessFootTrace_RigUnit_VisualDebugVectorItemSpace_1_2_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            ProcessFootTrace_1___ProcessFootTrace_SphereTraceByTraceChannel_TraceChannel__Const: UE.ETraceTypeQuery;
            ProcessFootTrace_1___ProcessFootTrace_If_2_False__Const: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_SpringInterpVectorV2_Strength__Const: number;
            ProcessFootTrace_1___ProcessFootTrace_SpringInterpVectorV2_Force__Const: UE.Vector;
            ProcessFootTrace_1___ProcessFootTrace_SpringInterpVectorV2_TargetVelocityAmount__Const: number;
            ProcessFootTrace_1___ProcessFootTrace_If_True__Const: UE.LinearColor;
            ProcessFootTrace_1___ProcessFootTrace_If_False__Const: UE.LinearColor;
            ProcessFootTrace_1___ProcessFootTrace_DebugLineItemSpace_WorldOffset__Const: UE.Transform;
            ProcessFootTrace_1___ProcessFootTrace_DebugTransformMutableItemSpace_Mode__Const: UE.ERigUnitDebugTransformMode;
            ProcessFootTrace_1___ProcessFootTrace_DebugTransformMutableItemSpace_Scale__Const: number;
            ProcessFootTrace_1___ProcessFootTrace_MathVectorScale_Factor__Const: number;
            ProcessFootTrace_1___ProcessFootTrace_DebugLineItemSpace_1_Thickness__Const: number;
            RigVMModel___SpringInterpV2_Strength__Const: number;
            RigVMModel___SpringInterpV2_Force__Const: number;
            RigVMModel___SpringInterpV2_TargetVelocityAmount__Const: number;
            RigVMModel___SetTransform_Item__Const: UE.RigElementKey;
            RigVMModel___SetTransform_Space__Const: UE.ERigVMTransformSpace;
            RigVMModel___SetTransform_Value__Const: UE.Transform;
            RigVMModel___MathTransformRotateVector_1_Vector__Const: UE.Vector;
            RigVMModel___AlphaInterp_1_InRange__Const: UE.InputRange;
            RigVMModel___MathFloatRemap_SourceMaximum__Const: number;
            RigVMModel___MathFloatRemap_TargetMaximum__Const: number;
            RigVMModel___OffsetTransformForItem_1_Item__Const: UE.RigElementKey;
            ProcessFootOffset___ProcessFootOffset_OffsetTransformForItem_2_OffsetTransform__Const: UE.Transform;
            ProcessFootOffset___ProcessFootOffset_GetRelativeTransformForItem_bChildInitial__Const: boolean;
            ProcessFootOffset___ProcessFootOffset_GetRelativeTransformForItem_Parent__Const: UE.RigElementKey;
            ProcessFootOffset___ProcessFootOffset_MathTransformRotateVector_1_1_1_Vector__Const: UE.Vector;
            ProcessFootOffset___ProcessFootOffset_SpringInterpV2_Strength__Const: number;
            ProcessFootOffset___ProcessFootOffset_SpringInterpV2_CriticalDamping__Const: number;
            ProcessFootOffset___ProcessFootOffset_SpringInterpV2_Force__Const: number;
            ProcessFootOffset___ProcessFootOffset_SpringInterpV2_bUseCurrentInput__Const: boolean;
            ProcessFootOffset___ProcessFootOffset_SpringInterpV2_TargetVelocityAmount__Const: number;
            ProcessFootOffset___ProcessFootOffset_SetRotation_Space__Const: UE.ERigVMTransformSpace;
            ProcessFootOffset___ProcessFootOffset_GetTransform_Item__Const: UE.RigElementKey;
            ProcessFootOffset___ProcessFootOffset_AimBoneMath_Primary__Const: UE.RigUnit_AimItem_Target;
            ProcessFootOffset___ProcessFootOffset_AimBoneMath_Secondary__Const: UE.RigUnit_AimItem_Target;
            ProcessFootOffset___ProcessFootOffset_AimBoneMath_DebugSettings__Const: UE.RigUnit_AimBone_DebugSettings;
            ProcessFootOffset_1___ProcessFootOffset_OffsetTransformForItem_2_OffsetTransform__Const: UE.Transform;
            ProcessFootOffset_1___ProcessFootOffset_GetRelativeTransformForItem_bChildInitial__Const: boolean;
            ProcessFootOffset_1___ProcessFootOffset_GetRelativeTransformForItem_Parent__Const: UE.RigElementKey;
            ProcessFootOffset_1___ProcessFootOffset_MathTransformRotateVector_1_1_1_Vector__Const: UE.Vector;
            ProcessFootOffset_1___ProcessFootOffset_SpringInterpV2_Strength__Const: number;
            ProcessFootOffset_1___ProcessFootOffset_SpringInterpV2_CriticalDamping__Const: number;
            ProcessFootOffset_1___ProcessFootOffset_SpringInterpV2_Force__Const: number;
            ProcessFootOffset_1___ProcessFootOffset_SpringInterpV2_bUseCurrentInput__Const: boolean;
            ProcessFootOffset_1___ProcessFootOffset_SpringInterpV2_TargetVelocityAmount__Const: number;
            ProcessFootOffset_1___ProcessFootOffset_SetRotation_Space__Const: UE.ERigVMTransformSpace;
            ProcessFootOffset_1___ProcessFootOffset_GetTransform_Item__Const: UE.RigElementKey;
            ProcessFootOffset_1___ProcessFootOffset_AimBoneMath_Primary__Const: UE.RigUnit_AimItem_Target;
            ProcessFootOffset_1___ProcessFootOffset_AimBoneMath_Secondary__Const: UE.RigUnit_AimItem_Target;
            ProcessFootOffset_1___ProcessFootOffset_AimBoneMath_DebugSettings__Const: UE.RigUnit_AimBone_DebugSettings;
            RigVMModel___DebugTransformMutableItemSpace_2_Mode__Const: UE.ERigUnitDebugTransformMode;
            RigVMModel___DebugTransformMutableItemSpace_2_Color__Const: UE.LinearColor;
            RigVMModel___DebugTransformMutableItemSpace_2_Scale__Const: number;
            RigVMModel___TwoBoneIKSimplePerItem_ItemA__Const: UE.RigElementKey;
            RigVMModel___TwoBoneIKSimplePerItem_ItemB__Const: UE.RigElementKey;
            RigVMModel___TwoBoneIKSimplePerItem_PrimaryAxis__Const: UE.Vector;
            RigVMModel___TwoBoneIKSimplePerItem_SecondaryAxis__Const: UE.Vector;
            RigVMModel___TwoBoneIKSimplePerItem_PoleVectorKind__Const: UE.EControlRigVectorKind;
            RigVMModel___TwoBoneIKSimplePerItem_PoleVectorSpace__Const: UE.RigElementKey;
            RigVMModel___TwoBoneIKSimplePerItem_StretchMaximumRatio__Const: number;
            RigVMModel___TwoBoneIKSimplePerItem_DebugSettings__Const: UE.RigUnit_TwoBoneIKSimple_DebugSettings;
            RigVMModel___TwoBoneIKSimplePerItem_1_ItemA__Const: UE.RigElementKey;
            RigVMModel___TwoBoneIKSimplePerItem_1_ItemB__Const: UE.RigElementKey;
            RigVMModel___TwoBoneIKSimplePerItem_1_PrimaryAxis__Const: UE.Vector;
            RigVMModel___TwoBoneIKSimplePerItem_1_SecondaryAxis__Const: UE.Vector;
            RigVMModel___SetControlOffset_Control__Const: string;
            RigVMModel___SetControlOffset_1_Control__Const: string;
            RigVMModel___SetControlOffset_1_1_Control__Const: string;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_文字;
            static Load(InName: string): RigVMMemory_文字;
        
            __tid_RigVMMemory_文字_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: F9D1F41D47BDE5AC72B39EA3A0AB3C47
    namespace Game.Characters.Heroes.Mannequin.Rig.CR_Mannequin_Procedural {
        class CR_Mannequin_Procedural_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CR_Mannequin_Procedural_C;
            static Load(InName: string): CR_Mannequin_Procedural_C;
        
            __tid_CR_Mannequin_Procedural_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: F9D1F41D47BDE5AC72B39EA3A0AB3C47
    namespace Game.Characters.Heroes.Mannequin.Rig.CR_Mannequin_Procedural {
        class RigVMMemory_Literal extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            RigVMModel___SetRotation_2_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_Space__Const: UE.ERigVMTransformSpace;
            RigVMModel___SetRotation_2_bInitial__Const: boolean;
            RigVMModel___GetTransform_6_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_1_bInitial__Const: boolean;
            RigVMModel___MathQuaternionSwingTwist_TwistAxis__Const: UE.Vector;
            RigVMModel___MathQuaternionSlerp_2_B__Const: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_T__Const: number;
            RigVMModel___SetRotation_2_Weight__Const: number;
            RigVMModel___SetRotation_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathQuaternionSlerp_T__Const: number;
            RigVMModel___SetTranslation_Space__Const: UE.ERigVMTransformSpace;
            RigVMModel___GetTransform_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathTransformLerp_T__Const: number;
            RigVMModel___SetRotation_2_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathQuaternionSlerp_1_T__Const: number;
            RigVMModel___MathTransformLerp_1_T__Const: number;
            RigVMModel___SetRotation_2_1_2_Item__Const: UE.RigElementKey;
            RigVMModel___MathQuaternionSlerp_2_3_T__Const: number;
            RigVMModel___SetRotation_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_5_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathQuaternionSlerp_4_T__Const: number;
            RigVMModel___SetRotation_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_2_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_3_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_1_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_5_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_1_1_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_3_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathQuaternionSlerp_2_2_T__Const: number;
            RigVMModel___SetRotation_2_1_3_2_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_1_2_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_3_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_2_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_3_1_2_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_2_1_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_2_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_3_1_3_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_2_2_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_1_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_3_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_3_2_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_3_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_3_1_5_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_3_2_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetTranslation_4_1_2_Item__Const: UE.RigElementKey;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_Literal;
            static Load(InName: string): RigVMMemory_Literal;
        
            __tid_RigVMMemory_Literal_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: F9D1F41D47BDE5AC72B39EA3A0AB3C47
    namespace Game.Characters.Heroes.Mannequin.Rig.CR_Mannequin_Procedural {
        class RigVMMemory_Work extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            RigVMModel___MathQuaternionMul_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_Local: UE.Transform;
            RigVMModel___GetTransform_6_Transform: UE.Transform;
            RigVMModel___GetTransform_6_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_Result: UE.Quat;
            RigVMModel___SetRotation_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_Result: UE.Transform;
            RigVMModel___GetTransform_Transform: UE.Transform;
            RigVMModel___GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_Value: UE.Vector;
            RigVMModel___SetTranslation_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_Result: UE.Transform;
            RigVMModel___SetTranslation_1_Value: UE.Vector;
            RigVMModel___SetTranslation_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_3_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_3_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_4_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_4_Local: UE.Transform;
            RigVMModel___GetTransform_6_2_Transform: UE.Transform;
            RigVMModel___GetTransform_6_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_4_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_4_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_3_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_4_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_4_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_3_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_3_Local: UE.Transform;
            RigVMModel___GetTransform_5_1_Transform: UE.Transform;
            RigVMModel___GetTransform_5_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_5_Transform: UE.Transform;
            RigVMModel___GetTransform_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_3_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_3_Swing: UE.Quat;
            RigVMModel___SetRotation_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_3_Result: UE.Transform;
            RigVMModel___GetTransform_4_Transform: UE.Transform;
            RigVMModel___GetTransform_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_3_Transform: UE.Transform;
            RigVMModel___GetTransform_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_5_Value: UE.Vector;
            RigVMModel___SetTranslation_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_3_Result: UE.Quat;
            RigVMModel___SetRotation_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_4_Result: UE.Transform;
            RigVMModel___SetTranslation_5_1_Value: UE.Vector;
            RigVMModel___SetTranslation_5_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_1_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_3_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_2_Result: UE.Transform;
            RigVMModel___GetTransform_2_Transform: UE.Transform;
            RigVMModel___GetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_2_Value: UE.Vector;
            RigVMModel___SetTranslation_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_1_Result: UE.Transform;
            RigVMModel___SetTranslation_2_1_Value: UE.Vector;
            RigVMModel___SetTranslation_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_3_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_3_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_4_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_4_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_4_Transform: UE.Transform;
            RigVMModel___GetTransform_6_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_3_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_4_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_4_1_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_3_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_4_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_3_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_3_1_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_3_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_3_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_5_Transform: UE.Transform;
            RigVMModel___GetTransform_6_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_4_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_3_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_3_1_Swing: UE.Quat;
            RigVMModel___SetRotation_2_1_3_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_3_1_Result: UE.Transform;
            RigVMModel___GetTransform_4_1_Transform: UE.Transform;
            RigVMModel___GetTransform_4_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_3_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_2_1_1_Value: UE.Vector;
            RigVMModel___SetTranslation_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_3_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_3_1_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_4_1_Result: UE.Transform;
            RigVMModel___SetTranslation_2_1_1_1_Value: UE.Vector;
            RigVMModel___SetTranslation_2_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_2_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_2_Result: UE.Quat;
            RigVMModel___SetRotation_2_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetRotation_2_1_3_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_3_Result: UE.Transform;
            RigVMModel___GetTransform_3_Transform: UE.Transform;
            RigVMModel___GetTransform_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_2_Transform: UE.Transform;
            RigVMModel___GetTransform_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_3_Value: UE.Vector;
            RigVMModel___SetTranslation_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_2_Result: UE.Quat;
            RigVMModel___SetRotation_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_2_Result: UE.Transform;
            RigVMModel___SetTranslation_3_1_Value: UE.Vector;
            RigVMModel___SetTranslation_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_2_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_2_2_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_2_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_2_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_2_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_2_2_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_3_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_2_2_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_2_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_2_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_2_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_Swing: UE.Quat;
            RigVMModel___SetRotation_2_1_3_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_2_2_Result: UE.Transform;
            RigVMModel___GetTransform_3_2_Transform: UE.Transform;
            RigVMModel___GetTransform_3_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_2_2_Transform: UE.Transform;
            RigVMModel___GetTransform_1_2_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_3_1_1_Value: UE.Vector;
            RigVMModel___SetTranslation_3_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetRotation_2_1_3_2_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_3_2_Result: UE.Transform;
            RigVMModel___SetTranslation_3_1_1_1_Value: UE.Vector;
            RigVMModel___SetTranslation_3_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_3_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_3_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_1_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_2_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetRotation_2_1_3_2_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_3_1_Result: UE.Transform;
            RigVMModel___GetTransform_3_1_Transform: UE.Transform;
            RigVMModel___GetTransform_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_2_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_4_Value: UE.Vector;
            RigVMModel___SetTranslation_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_2_1_Result: UE.Quat;
            RigVMModel___SetRotation_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_2_1_Result: UE.Transform;
            RigVMModel___SetTranslation_4_1_Value: UE.Vector;
            RigVMModel___SetTranslation_4_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_2_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_2_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_2_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_2_2_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_4_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_4_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_2_2_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_2_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_2_2_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_2_2_1_Result: UE.Quat;
            RigVMModel___SetRotation_3_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_2_2_2_1_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_2_1_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_5_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_5_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_1_Swing: UE.Quat;
            RigVMModel___SetRotation_3_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_2_2_1_Result: UE.Transform;
            RigVMModel___GetTransform_3_2_1_Transform: UE.Transform;
            RigVMModel___GetTransform_3_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_2_2_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_2_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_4_1_1_Value: UE.Vector;
            RigVMModel___SetTranslation_4_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetRotation_3_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_3_2_1_Result: UE.Transform;
            RigVMModel___SetTranslation_4_1_2_Value: UE.Vector;
            RigVMModel___SetTranslation_4_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_Work;
            static Load(InName: string): RigVMMemory_Work;
        
            __tid_RigVMMemory_Work_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: F9D1F41D47BDE5AC72B39EA3A0AB3C47
    namespace Game.Characters.Heroes.Mannequin.Rig.CR_Mannequin_Procedural {
        class RigVMMemory_工作 extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            RigVMModel___MathQuaternionMul_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_Local: UE.Transform;
            RigVMModel___GetTransform_6_Transform: UE.Transform;
            RigVMModel___GetTransform_6_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_Result: UE.Quat;
            RigVMModel___SetRotation_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_Result: UE.Transform;
            RigVMModel___GetTransform_Transform: UE.Transform;
            RigVMModel___GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_Value: UE.Vector;
            RigVMModel___SetTranslation_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_Result: UE.Transform;
            RigVMModel___SetTranslation_1_Value: UE.Vector;
            RigVMModel___SetTranslation_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_3_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_3_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_4_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_4_Local: UE.Transform;
            RigVMModel___GetTransform_6_2_Transform: UE.Transform;
            RigVMModel___GetTransform_6_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_4_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_4_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_3_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_4_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_4_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_3_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_3_Local: UE.Transform;
            RigVMModel___GetTransform_5_1_Transform: UE.Transform;
            RigVMModel___GetTransform_5_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_5_Transform: UE.Transform;
            RigVMModel___GetTransform_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_3_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_3_Swing: UE.Quat;
            RigVMModel___SetRotation_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_3_Result: UE.Transform;
            RigVMModel___GetTransform_4_Transform: UE.Transform;
            RigVMModel___GetTransform_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_3_Transform: UE.Transform;
            RigVMModel___GetTransform_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_5_Value: UE.Vector;
            RigVMModel___SetTranslation_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_3_Result: UE.Quat;
            RigVMModel___SetRotation_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_4_Result: UE.Transform;
            RigVMModel___SetTranslation_5_1_Value: UE.Vector;
            RigVMModel___SetTranslation_5_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_1_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_3_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_2_Result: UE.Transform;
            RigVMModel___GetTransform_2_Transform: UE.Transform;
            RigVMModel___GetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_2_Value: UE.Vector;
            RigVMModel___SetTranslation_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_1_Result: UE.Transform;
            RigVMModel___SetTranslation_2_1_Value: UE.Vector;
            RigVMModel___SetTranslation_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_3_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_3_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_4_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_4_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_4_Transform: UE.Transform;
            RigVMModel___GetTransform_6_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_3_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_4_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_4_1_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_3_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_4_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_3_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_3_1_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_3_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_3_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_5_Transform: UE.Transform;
            RigVMModel___GetTransform_6_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_4_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_3_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_3_1_Swing: UE.Quat;
            RigVMModel___SetRotation_2_1_3_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_3_1_Result: UE.Transform;
            RigVMModel___GetTransform_4_1_Transform: UE.Transform;
            RigVMModel___GetTransform_4_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_3_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_2_1_1_Value: UE.Vector;
            RigVMModel___SetTranslation_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_3_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_3_1_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_4_1_Result: UE.Transform;
            RigVMModel___SetTranslation_2_1_1_1_Value: UE.Vector;
            RigVMModel___SetTranslation_2_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_2_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_2_Result: UE.Quat;
            RigVMModel___SetRotation_2_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetRotation_2_1_3_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_3_Result: UE.Transform;
            RigVMModel___GetTransform_3_Transform: UE.Transform;
            RigVMModel___GetTransform_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_2_Transform: UE.Transform;
            RigVMModel___GetTransform_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_3_Value: UE.Vector;
            RigVMModel___SetTranslation_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_2_Result: UE.Quat;
            RigVMModel___SetRotation_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_2_Result: UE.Transform;
            RigVMModel___SetTranslation_3_1_Value: UE.Vector;
            RigVMModel___SetTranslation_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_2_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_2_2_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_2_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_2_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_2_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_2_2_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_3_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_2_2_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_2_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_2_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_2_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_Swing: UE.Quat;
            RigVMModel___SetRotation_2_1_3_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_2_2_Result: UE.Transform;
            RigVMModel___GetTransform_3_2_Transform: UE.Transform;
            RigVMModel___GetTransform_3_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_2_2_Transform: UE.Transform;
            RigVMModel___GetTransform_1_2_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_3_1_1_Value: UE.Vector;
            RigVMModel___SetTranslation_3_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetRotation_2_1_3_2_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_3_2_Result: UE.Transform;
            RigVMModel___SetTranslation_3_1_1_1_Value: UE.Vector;
            RigVMModel___SetTranslation_3_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_3_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_3_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_1_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_2_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetRotation_2_1_3_2_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_3_1_Result: UE.Transform;
            RigVMModel___GetTransform_3_1_Transform: UE.Transform;
            RigVMModel___GetTransform_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_2_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_4_Value: UE.Vector;
            RigVMModel___SetTranslation_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_2_1_Result: UE.Quat;
            RigVMModel___SetRotation_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_2_1_Result: UE.Transform;
            RigVMModel___SetTranslation_4_1_Value: UE.Vector;
            RigVMModel___SetTranslation_4_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_2_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_2_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_2_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_2_2_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_4_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_4_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_2_2_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_2_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_2_2_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_2_2_1_Result: UE.Quat;
            RigVMModel___SetRotation_3_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_2_2_2_1_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_2_1_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_5_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_5_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_1_Swing: UE.Quat;
            RigVMModel___SetRotation_3_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_2_2_1_Result: UE.Transform;
            RigVMModel___GetTransform_3_2_1_Transform: UE.Transform;
            RigVMModel___GetTransform_3_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_2_2_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_2_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_4_1_1_Value: UE.Vector;
            RigVMModel___SetTranslation_4_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetRotation_3_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_3_2_1_Result: UE.Transform;
            RigVMModel___SetTranslation_4_1_2_Value: UE.Vector;
            RigVMModel___SetTranslation_4_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_工作;
            static Load(InName: string): RigVMMemory_工作;
        
            __tid_RigVMMemory_工作_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: F9D1F41D47BDE5AC72B39EA3A0AB3C47
    namespace Game.Characters.Heroes.Mannequin.Rig.CR_Mannequin_Procedural {
        class RigVMMemory_文字 extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            RigVMModel___SetRotation_2_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_Space__Const: UE.ERigVMTransformSpace;
            RigVMModel___SetRotation_2_bInitial__Const: boolean;
            RigVMModel___GetTransform_6_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_1_bInitial__Const: boolean;
            RigVMModel___MathQuaternionSwingTwist_TwistAxis__Const: UE.Vector;
            RigVMModel___MathQuaternionSlerp_2_B__Const: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_T__Const: number;
            RigVMModel___SetRotation_2_Weight__Const: number;
            RigVMModel___SetRotation_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathQuaternionSlerp_T__Const: number;
            RigVMModel___SetTranslation_Space__Const: UE.ERigVMTransformSpace;
            RigVMModel___GetTransform_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathTransformLerp_T__Const: number;
            RigVMModel___SetRotation_2_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathQuaternionSlerp_1_T__Const: number;
            RigVMModel___MathTransformLerp_1_T__Const: number;
            RigVMModel___SetRotation_2_1_2_Item__Const: UE.RigElementKey;
            RigVMModel___MathQuaternionSlerp_2_3_T__Const: number;
            RigVMModel___SetRotation_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_5_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathQuaternionSlerp_4_T__Const: number;
            RigVMModel___SetRotation_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_2_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_3_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_1_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_5_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_1_1_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_3_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathQuaternionSlerp_2_2_T__Const: number;
            RigVMModel___SetRotation_2_1_3_2_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_1_2_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_3_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_2_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_3_1_2_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_2_1_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_2_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_3_1_3_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_2_2_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_1_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_3_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_3_2_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_3_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_3_1_5_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_3_2_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetTranslation_4_1_2_Item__Const: UE.RigElementKey;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_文字;
            static Load(InName: string): RigVMMemory_文字;
        
            __tid_RigVMMemory_文字_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: AC75A5164D34AEE14556999BF0DBC723
    namespace Game.Characters.Heroes.Mannequin.BP_Character {
        class BP_Character_C extends UE.TPSCharacter {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_Character_C;
            static Load(InName: string): BP_Character_C;
        
            __tid_BP_Character_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 9BD6D990446BE402C9892EB52280A724
    namespace Game.Characters.Heroes.Mannequin.Animations.AnimStruct_TurnInPlaceEntry {
        class AnimStruct_TurnInPlaceEntry {
            constructor();
            constructor(Angle: number, AngleModifier: number, AnimSequence: UE.AnimSequence, CrouchAnimSequence: UE.AnimSequence, DelayBeforeTrigger: number, AngleRange: UE.Vector2D);
            Angle: number;
            AngleModifier: number;
            AnimSequence: UE.AnimSequence;
            CrouchAnimSequence: UE.AnimSequence;
            DelayBeforeTrigger: number;
            AngleRange: UE.Vector2D;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimStruct_TurnInPlaceEntry_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: DFAE38FB4176B1E7B1CA7492E24A2BC9
    namespace Game.Characters.Heroes.Mannequin.Animations.Locomotion.Pistol.ABP_PistolAnimLayers_Feminine {
        class ABP_PistolAnimLayers_Feminine_C extends UE.Game.Characters.Heroes.Mannequin.Animations.LinkedLayers.ABP_ItemAnimLayersBase.ABP_ItemAnimLayersBase_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_PistolAnimLayers_Feminine_C;
            static Load(InName: string): ABP_PistolAnimLayers_Feminine_C;
        
            __tid_ABP_PistolAnimLayers_Feminine_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 9A39EC2E4850370CCA884685E1EFECBB
    namespace Game.Characters.Heroes.Mannequin.Animations.Locomotion.Pistol.ABP_PistolAnimLayers {
        class ABP_PistolAnimLayers_C extends UE.Game.Characters.Heroes.Mannequin.Animations.LinkedLayers.ABP_ItemAnimLayersBase.ABP_ItemAnimLayersBase_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_PistolAnimLayers_C;
            static Load(InName: string): ABP_PistolAnimLayers_C;
        
            __tid_ABP_PistolAnimLayers_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 9A39EC2E4850370CCA884685E1EFECBB
    namespace Game.Characters.Heroes.Mannequin.Animations.Locomotion.Pistol.ABP_PistolAnimLayers {
        class AnimBlueprintGeneratedConstantData extends UE.Game.Characters.Heroes.Mannequin.Animations.LinkedLayers.ABP_ItemAnimLayersBase.AnimBlueprintGeneratedConstantData {
            constructor();
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedConstantData_1__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 9C2505B64788CEF77097A193849116C1
    namespace Game.Characters.Heroes.Mannequin.Animations.Locomotion.Rifle.ABP_RifleAnimLayers_Feminine {
        class ABP_RifleAnimLayers_Feminine_C extends UE.Game.Characters.Heroes.Mannequin.Animations.LinkedLayers.ABP_ItemAnimLayersBase.ABP_ItemAnimLayersBase_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_RifleAnimLayers_Feminine_C;
            static Load(InName: string): ABP_RifleAnimLayers_Feminine_C;
        
            __tid_ABP_RifleAnimLayers_Feminine_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 43F60BBA4D0CA3B2EA821394CDB5DF7A
    namespace Game.Characters.Heroes.Mannequin.Animations.Locomotion.Rifle.ABP_RifleAnimLayers {
        class ABP_RifleAnimLayers_C extends UE.Game.Characters.Heroes.Mannequin.Animations.LinkedLayers.ABP_ItemAnimLayersBase.ABP_ItemAnimLayersBase_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_RifleAnimLayers_C;
            static Load(InName: string): ABP_RifleAnimLayers_C;
        
            __tid_ABP_RifleAnimLayers_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 43F60BBA4D0CA3B2EA821394CDB5DF7A
    namespace Game.Characters.Heroes.Mannequin.Animations.Locomotion.Rifle.ABP_RifleAnimLayers {
        class AnimBlueprintGeneratedConstantData extends UE.Game.Characters.Heroes.Mannequin.Animations.LinkedLayers.ABP_ItemAnimLayersBase.AnimBlueprintGeneratedConstantData {
            constructor();
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedConstantData_1__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 8D30E437496C968DFA0C89ACC16A525B
    namespace Game.Characters.Heroes.Mannequin.Animations.Locomotion.Shotgun.ABP_ShotgunAnimLayers_Feminine {
        class ABP_ShotgunAnimLayers_Feminine_C extends UE.Game.Characters.Heroes.Mannequin.Animations.Locomotion.Rifle.ABP_RifleAnimLayers_Feminine.ABP_RifleAnimLayers_Feminine_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_ShotgunAnimLayers_Feminine_C;
            static Load(InName: string): ABP_ShotgunAnimLayers_Feminine_C;
        
            __tid_ABP_ShotgunAnimLayers_Feminine_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 0EE4670640B52C336095B3B3173DE369
    namespace Game.Characters.Heroes.Mannequin.Animations.Locomotion.Shotgun.ABP_ShotgunAnimLayers {
        class ABP_ShotgunAnimLayers_C extends UE.Game.Characters.Heroes.Mannequin.Animations.Locomotion.Rifle.ABP_RifleAnimLayers.ABP_RifleAnimLayers_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_ShotgunAnimLayers_C;
            static Load(InName: string): ABP_ShotgunAnimLayers_C;
        
            __tid_ABP_ShotgunAnimLayers_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: AA382AB74F023CCF8F7BE7A44F1590D8
    namespace Game.Characters.Heroes.Mannequin.Animations.Locomotion.Unarmed.ABP_UnarmedAnimLayers {
        class ABP_UnarmedAnimLayers_C extends UE.Game.Characters.Heroes.Mannequin.Animations.LinkedLayers.ABP_ItemAnimLayersBase.ABP_ItemAnimLayersBase_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_UnarmedAnimLayers_C;
            static Load(InName: string): ABP_UnarmedAnimLayers_C;
        
            __tid_ABP_UnarmedAnimLayers_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: AA382AB74F023CCF8F7BE7A44F1590D8
    namespace Game.Characters.Heroes.Mannequin.Animations.Locomotion.Unarmed.ABP_UnarmedAnimLayers {
        class AnimBlueprintGeneratedConstantData extends UE.Game.Characters.Heroes.Mannequin.Animations.LinkedLayers.ABP_ItemAnimLayersBase.AnimBlueprintGeneratedConstantData {
            constructor();
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedConstantData_1__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 5786FA4344DDC35ECD26D7BED34E658F
    namespace Game.Characters.Heroes.Mannequin.Rig.CR_Mannequin_Body {
        class CR_Mannequin_Body_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["L Arm IK Mode"]: boolean;
            ["R Arm IK Mode"]: boolean;
            ["L Leg IK Mode "]: boolean;
            ["R Leg IK Mode"]: boolean;
            ["Spine IK Mode"]: boolean;
            ["Neck IK Mode"]: boolean;
            ["Spine Offsets"]: TArray<UE.Transform>;
            ["Spine Length"]: number;
            ["Neck Length"]: number;
            ["L Arm IK Align"]: boolean;
            ["R Arm IK Align"]: boolean;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CR_Mannequin_Body_C;
            static Load(InName: string): CR_Mannequin_Body_C;
        
            __tid_CR_Mannequin_Body_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 6F2119864F5F84743F2364994CD36A67
    namespace Game.Characters.Heroes.Mannequin.Rig.ABP_Manny_PostProcess {
        class ABP_Manny_PostProcess_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_LinkedInputPose: UE.AnimNode_LinkedInputPose;
            AnimGraphNode_ControlRig: UE.AnimNode_ControlRig;
            AnimGraphNode_PoseDriver_13: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_12: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_11: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_10: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_9: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_8: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_7: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_6: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_5: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_4: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_3: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_2: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_1: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver: UE.AnimNode_PoseDriver;
            AnimGraph(InPose: UE.PoseLink, AnimGraph: $Ref<UE.PoseLink>) : void;
            ExecuteUbergraph_ABP_Manny_PostProcess(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_Manny_PostProcess_C;
            static Load(InName: string): ABP_Manny_PostProcess_C;
        
            __tid_ABP_Manny_PostProcess_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 6F2119864F5F84743F2364994CD36A67
    namespace Game.Characters.Heroes.Mannequin.Rig.ABP_Manny_PostProcess {
        class AnimBlueprintGeneratedConstantData extends UE.AnimBlueprintConstantData {
            constructor();
            constructor(__NameProperty_49: string, __NameProperty_50: string, __StructProperty_51: UE.AnimNodeFunctionRef, AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess, AnimBlueprintExtension_Base: UE.AnimSubsystem_Base);
            __NameProperty_49: string;
            __NameProperty_50: string;
            __StructProperty_51: UE.AnimNodeFunctionRef;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess;
            AnimBlueprintExtension_Base: UE.AnimSubsystem_Base;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedConstantData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4AC5A9F94641E5CE0D39F98028C9CF48
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_Procedural {
        class CR_Mannequin_Procedural_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CR_Mannequin_Procedural_C;
            static Load(InName: string): CR_Mannequin_Procedural_C;
        
            __tid_CR_Mannequin_Procedural_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4AC5A9F94641E5CE0D39F98028C9CF48
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_Procedural {
        class RigVMMemory_Literal extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            SetRotation_2_Item__Const: UE.RigElementKey;
            SetRotation_2_Space__Const: UE.ERigVMTransformSpace;
            GetTransform_6_Item__Const: UE.RigElementKey;
            GetTransform_6_bInitial__Const: boolean;
            GetTransform_6_1_bInitial__Const: boolean;
            MathQuaternionSwingTwist_TwistAxis__Const: UE.Vector;
            MathQuaternionSlerp_2_B__Const: UE.Quat;
            MathQuaternionSlerp_2_T__Const: number;
            SetRotation_2_Weight__Const: number;
            SetRotation_2_1_Item__Const: UE.RigElementKey;
            MathQuaternionSlerp_T__Const: number;
            SetTranslation_Space__Const: UE.ERigVMTransformSpace;
            GetTransform_1_Item__Const: UE.RigElementKey;
            MathTransformLerp_T__Const: number;
            SetRotation_2_1_1_Item__Const: UE.RigElementKey;
            MathQuaternionSlerp_1_T__Const: number;
            MathTransformLerp_1_T__Const: number;
            SetRotation_2_1_2_Item__Const: UE.RigElementKey;
            MathQuaternionSlerp_2_3_T__Const: number;
            SetRotation_1_Item__Const: UE.RigElementKey;
            GetTransform_5_1_Item__Const: UE.RigElementKey;
            MathQuaternionSlerp_4_T__Const: number;
            SetRotation_Item__Const: UE.RigElementKey;
            SetRotation_2_2_Item__Const: UE.RigElementKey;
            GetTransform_6_3_Item__Const: UE.RigElementKey;
            SetRotation_2_1_3_Item__Const: UE.RigElementKey;
            GetTransform_1_1_Item__Const: UE.RigElementKey;
            SetRotation_2_1_3_1_Item__Const: UE.RigElementKey;
            SetRotation_2_1_3_1_1_Item__Const: UE.RigElementKey;
            SetRotation_2_1_3_1_1_1_Item__Const: UE.RigElementKey;
            GetTransform_6_5_Item__Const: UE.RigElementKey;
            SetRotation_2_1_3_1_1_1_1_Item__Const: UE.RigElementKey;
            SetRotation_2_2_1_Item__Const: UE.RigElementKey;
            GetTransform_6_3_1_Item__Const: UE.RigElementKey;
            MathQuaternionSlerp_2_2_T__Const: number;
            SetRotation_2_1_3_2_Item__Const: UE.RigElementKey;
            GetTransform_1_2_Item__Const: UE.RigElementKey;
            SetRotation_3_Item__Const: UE.RigElementKey;
            SetRotation_2_1_3_2_1_Item__Const: UE.RigElementKey;
            SetRotation_2_1_3_2_1_1_Item__Const: UE.RigElementKey;
            GetTransform_6_3_1_2_Item__Const: UE.RigElementKey;
            SetRotation_2_1_3_2_1_1_1_Item__Const: UE.RigElementKey;
            SetRotation_2_2_1_1_Item__Const: UE.RigElementKey;
            GetTransform_6_3_1_3_Item__Const: UE.RigElementKey;
            SetRotation_2_1_3_2_2_Item__Const: UE.RigElementKey;
            GetTransform_1_2_1_Item__Const: UE.RigElementKey;
            SetRotation_3_1_Item__Const: UE.RigElementKey;
            SetRotation_3_2_Item__Const: UE.RigElementKey;
            SetRotation_3_2_1_Item__Const: UE.RigElementKey;
            GetTransform_6_3_1_5_Item__Const: UE.RigElementKey;
            SetRotation_3_2_1_1_Item__Const: UE.RigElementKey;
            SetTranslation_4_1_2_Item__Const: UE.RigElementKey;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_Literal;
            static Load(InName: string): RigVMMemory_Literal;
        
            __tid_RigVMMemory_Literal_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4AC5A9F94641E5CE0D39F98028C9CF48
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_Procedural {
        class RigVMMemory_Work extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ExecuteContext_: UE.ControlRigExecuteContext;
            MathQuaternionMul_Result: UE.Quat;
            MathQuaternionInverse_3_Result: UE.Quat;
            MathQuaternionSwingTwist_Twist: UE.Quat;
            MathTransformMakeRelative_3_Local: UE.Transform;
            GetTransform_6_Transform: UE.Transform;
            GetTransform_6_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_6_1_Transform: UE.Transform;
            GetTransform_6_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSwingTwist_Input: UE.Quat;
            MathQuaternionSwingTwist_Swing: UE.Quat;
            MathQuaternionSlerp_2_Result: UE.Quat;
            MathQuaternionInverse_2_Result: UE.Quat;
            SetRotation_2_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSlerp_Result: UE.Quat;
            SetRotation_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_Result: UE.Transform;
            GetTransform_Transform: UE.Transform;
            GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_1_Transform: UE.Transform;
            GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            SetTranslation_Translation: UE.Vector;
            SetTranslation_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSlerp_1_Result: UE.Quat;
            SetRotation_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_1_Result: UE.Transform;
            SetTranslation_1_Translation: UE.Vector;
            SetTranslation_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionMul_3_Result: UE.Quat;
            MathQuaternionInverse_3_3_Result: UE.Quat;
            MathQuaternionSwingTwist_4_Twist: UE.Quat;
            MathTransformMakeRelative_3_4_Local: UE.Transform;
            GetTransform_6_2_Transform: UE.Transform;
            GetTransform_6_2_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_6_1_1_Transform: UE.Transform;
            GetTransform_6_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSwingTwist_4_Input: UE.Quat;
            MathQuaternionSwingTwist_4_Swing: UE.Quat;
            MathQuaternionSlerp_2_3_Result: UE.Quat;
            MathQuaternionInverse_2_4_Result: UE.Quat;
            SetRotation_2_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSlerp_4_Result: UE.Quat;
            MathQuaternionSwingTwist_3_Twist: UE.Quat;
            MathTransformMakeRelative_3_3_Local: UE.Transform;
            GetTransform_5_1_Transform: UE.Transform;
            GetTransform_5_1_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_5_Transform: UE.Transform;
            GetTransform_5_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSwingTwist_3_Input: UE.Quat;
            MathQuaternionSwingTwist_3_Swing: UE.Quat;
            SetRotation_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_1_3_Result: UE.Transform;
            GetTransform_4_Transform: UE.Transform;
            GetTransform_4_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_1_3_Transform: UE.Transform;
            GetTransform_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            SetTranslation_5_Translation: UE.Vector;
            SetTranslation_5_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSlerp_1_3_Result: UE.Quat;
            SetRotation_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_4_Result: UE.Transform;
            SetTranslation_5_1_Translation: UE.Vector;
            SetTranslation_5_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionMul_1_Result: UE.Quat;
            MathQuaternionInverse_3_1_Result: UE.Quat;
            MathQuaternionSwingTwist_1_Twist: UE.Quat;
            MathTransformMakeRelative_3_1_Local: UE.Transform;
            GetTransform_6_3_Transform: UE.Transform;
            GetTransform_6_3_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_6_1_2_Transform: UE.Transform;
            GetTransform_6_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSwingTwist_1_Input: UE.Quat;
            MathQuaternionSwingTwist_1_Swing: UE.Quat;
            MathQuaternionSlerp_2_1_Result: UE.Quat;
            MathQuaternionInverse_2_1_Result: UE.Quat;
            SetRotation_2_2_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSlerp_3_Result: UE.Quat;
            SetRotation_2_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_2_Result: UE.Transform;
            GetTransform_2_Transform: UE.Transform;
            GetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_1_1_Transform: UE.Transform;
            GetTransform_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            SetTranslation_2_Translation: UE.Vector;
            SetTranslation_2_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSlerp_1_1_Result: UE.Quat;
            SetRotation_2_1_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_1_1_Result: UE.Transform;
            SetTranslation_2_1_Translation: UE.Vector;
            SetTranslation_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionMul_3_1_Result: UE.Quat;
            MathQuaternionInverse_3_3_1_Result: UE.Quat;
            MathQuaternionSwingTwist_4_1_Twist: UE.Quat;
            MathTransformMakeRelative_3_4_1_Local: UE.Transform;
            GetTransform_6_4_Transform: UE.Transform;
            GetTransform_6_4_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_6_1_3_Transform: UE.Transform;
            GetTransform_6_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSwingTwist_4_1_Input: UE.Quat;
            MathQuaternionSwingTwist_4_1_Swing: UE.Quat;
            MathQuaternionSlerp_2_3_1_Result: UE.Quat;
            MathQuaternionInverse_2_4_1_Result: UE.Quat;
            SetRotation_2_1_3_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSlerp_1_3_1_1_Result: UE.Quat;
            MathQuaternionSwingTwist_3_1_Twist: UE.Quat;
            MathTransformMakeRelative_3_3_1_Local: UE.Transform;
            GetTransform_6_5_Transform: UE.Transform;
            GetTransform_6_5_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_6_1_4_Transform: UE.Transform;
            GetTransform_6_1_4_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSwingTwist_3_1_Input: UE.Quat;
            MathQuaternionSwingTwist_3_1_Swing: UE.Quat;
            SetRotation_2_1_3_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_1_3_1_Result: UE.Transform;
            GetTransform_4_1_Transform: UE.Transform;
            GetTransform_4_1_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_1_3_1_Transform: UE.Transform;
            GetTransform_1_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            SetTranslation_2_1_1_Translation: UE.Vector;
            SetTranslation_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSlerp_1_3_1_Result: UE.Quat;
            SetRotation_2_1_3_1_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_4_1_Result: UE.Transform;
            SetTranslation_2_1_1_1_Translation: UE.Vector;
            SetTranslation_2_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionMul_2_Result: UE.Quat;
            MathQuaternionInverse_3_2_Result: UE.Quat;
            MathQuaternionSwingTwist_2_Twist: UE.Quat;
            MathTransformMakeRelative_3_2_Local: UE.Transform;
            GetTransform_6_3_1_Transform: UE.Transform;
            GetTransform_6_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_6_1_2_1_Transform: UE.Transform;
            GetTransform_6_1_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSwingTwist_2_Input: UE.Quat;
            MathQuaternionSwingTwist_2_Swing: UE.Quat;
            MathQuaternionSlerp_2_2_Result: UE.Quat;
            MathQuaternionInverse_2_2_Result: UE.Quat;
            SetRotation_2_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            SetRotation_2_1_3_2_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_3_Result: UE.Transform;
            GetTransform_3_Transform: UE.Transform;
            GetTransform_3_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_1_2_Transform: UE.Transform;
            GetTransform_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            SetTranslation_3_Translation: UE.Vector;
            SetTranslation_3_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSlerp_1_2_Result: UE.Quat;
            SetRotation_3_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_1_2_Result: UE.Transform;
            SetTranslation_3_1_Translation: UE.Vector;
            SetTranslation_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionMul_2_2_Result: UE.Quat;
            MathQuaternionInverse_3_2_2_Result: UE.Quat;
            MathQuaternionSwingTwist_2_2_Twist: UE.Quat;
            MathTransformMakeRelative_3_2_2_Local: UE.Transform;
            GetTransform_6_3_1_1_Transform: UE.Transform;
            GetTransform_6_3_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_6_1_2_1_1_Transform: UE.Transform;
            GetTransform_6_1_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSwingTwist_2_2_Input: UE.Quat;
            MathQuaternionSwingTwist_2_2_Swing: UE.Quat;
            MathQuaternionSlerp_2_2_2_Result: UE.Quat;
            MathQuaternionInverse_2_2_2_Result: UE.Quat;
            SetRotation_2_1_3_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSlerp_2_2_2_1_Result: UE.Quat;
            MathQuaternionSwingTwist_2_2_1_Twist: UE.Quat;
            MathTransformMakeRelative_3_2_2_1_Local: UE.Transform;
            GetTransform_6_3_1_2_Transform: UE.Transform;
            GetTransform_6_3_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_6_1_2_1_2_Transform: UE.Transform;
            GetTransform_6_1_2_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSwingTwist_2_2_1_Input: UE.Quat;
            MathQuaternionSwingTwist_2_2_1_Swing: UE.Quat;
            SetRotation_2_1_3_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_1_2_2_Result: UE.Transform;
            GetTransform_3_2_Transform: UE.Transform;
            GetTransform_3_2_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_1_2_2_Transform: UE.Transform;
            GetTransform_1_2_2_CachedIndex: TArray<UE.CachedRigElement>;
            SetTranslation_3_1_1_Translation: UE.Vector;
            SetTranslation_3_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            SetRotation_2_1_3_2_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_3_2_Result: UE.Transform;
            SetTranslation_3_1_1_1_Translation: UE.Vector;
            SetTranslation_3_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionMul_2_1_Result: UE.Quat;
            MathQuaternionInverse_3_2_1_Result: UE.Quat;
            MathQuaternionSwingTwist_2_1_Twist: UE.Quat;
            MathTransformMakeRelative_3_2_1_Local: UE.Transform;
            GetTransform_6_3_1_3_Transform: UE.Transform;
            GetTransform_6_3_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_6_1_2_1_3_Transform: UE.Transform;
            GetTransform_6_1_2_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSwingTwist_2_1_Input: UE.Quat;
            MathQuaternionSwingTwist_2_1_Swing: UE.Quat;
            MathQuaternionSlerp_2_2_1_Result: UE.Quat;
            MathQuaternionInverse_2_2_1_Result: UE.Quat;
            SetRotation_2_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            SetRotation_2_1_3_2_2_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_3_1_Result: UE.Transform;
            GetTransform_3_1_Transform: UE.Transform;
            GetTransform_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_1_2_1_Transform: UE.Transform;
            GetTransform_1_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            SetTranslation_4_Translation: UE.Vector;
            SetTranslation_4_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSlerp_1_2_1_Result: UE.Quat;
            SetRotation_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_1_2_1_Result: UE.Transform;
            SetTranslation_4_1_Translation: UE.Vector;
            SetTranslation_4_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionMul_2_2_1_Result: UE.Quat;
            MathQuaternionInverse_3_2_2_1_Result: UE.Quat;
            MathQuaternionSwingTwist_2_2_2_Twist: UE.Quat;
            MathTransformMakeRelative_3_2_2_2_Local: UE.Transform;
            GetTransform_6_3_1_4_Transform: UE.Transform;
            GetTransform_6_3_1_4_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_6_1_2_1_4_Transform: UE.Transform;
            GetTransform_6_1_2_1_4_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSwingTwist_2_2_2_Input: UE.Quat;
            MathQuaternionSwingTwist_2_2_2_Swing: UE.Quat;
            MathQuaternionSlerp_2_2_2_2_Result: UE.Quat;
            MathQuaternionInverse_2_2_2_1_Result: UE.Quat;
            SetRotation_3_2_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSlerp_2_2_2_1_1_Result: UE.Quat;
            MathQuaternionSwingTwist_2_2_1_1_Twist: UE.Quat;
            MathTransformMakeRelative_3_2_2_1_1_Local: UE.Transform;
            GetTransform_6_3_1_5_Transform: UE.Transform;
            GetTransform_6_3_1_5_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_6_1_2_1_5_Transform: UE.Transform;
            GetTransform_6_1_2_1_5_CachedIndex: TArray<UE.CachedRigElement>;
            MathQuaternionSwingTwist_2_2_1_1_Input: UE.Quat;
            MathQuaternionSwingTwist_2_2_1_1_Swing: UE.Quat;
            SetRotation_3_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_1_2_2_1_Result: UE.Transform;
            GetTransform_3_2_1_Transform: UE.Transform;
            GetTransform_3_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_1_2_2_1_Transform: UE.Transform;
            GetTransform_1_2_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            SetTranslation_4_1_1_Translation: UE.Vector;
            SetTranslation_4_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            SetRotation_3_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            MathTransformLerp_3_2_1_Result: UE.Transform;
            SetTranslation_4_1_2_Translation: UE.Vector;
            SetTranslation_4_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_Work;
            static Load(InName: string): RigVMMemory_Work;
        
            __tid_RigVMMemory_Work_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4AC5A9F94641E5CE0D39F98028C9CF48
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_Procedural {
        class RigVMMemory_工作 extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            RigVMModel___MathQuaternionMul_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_Local: UE.Transform;
            RigVMModel___GetTransform_6_Transform: UE.Transform;
            RigVMModel___GetTransform_6_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_Result: UE.Quat;
            RigVMModel___SetRotation_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_Result: UE.Transform;
            RigVMModel___GetTransform_Transform: UE.Transform;
            RigVMModel___GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_Value: UE.Vector;
            RigVMModel___SetTranslation_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_Result: UE.Transform;
            RigVMModel___SetTranslation_1_Value: UE.Vector;
            RigVMModel___SetTranslation_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_3_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_3_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_4_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_4_Local: UE.Transform;
            RigVMModel___GetTransform_6_2_Transform: UE.Transform;
            RigVMModel___GetTransform_6_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_4_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_4_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_3_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_4_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_4_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_3_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_3_Local: UE.Transform;
            RigVMModel___GetTransform_5_1_Transform: UE.Transform;
            RigVMModel___GetTransform_5_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_5_Transform: UE.Transform;
            RigVMModel___GetTransform_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_3_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_3_Swing: UE.Quat;
            RigVMModel___SetRotation_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_3_Result: UE.Transform;
            RigVMModel___GetTransform_4_Transform: UE.Transform;
            RigVMModel___GetTransform_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_3_Transform: UE.Transform;
            RigVMModel___GetTransform_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_5_Value: UE.Vector;
            RigVMModel___SetTranslation_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_3_Result: UE.Quat;
            RigVMModel___SetRotation_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_4_Result: UE.Transform;
            RigVMModel___SetTranslation_5_1_Value: UE.Vector;
            RigVMModel___SetTranslation_5_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_1_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_3_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_2_Result: UE.Transform;
            RigVMModel___GetTransform_2_Transform: UE.Transform;
            RigVMModel___GetTransform_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_2_Value: UE.Vector;
            RigVMModel___SetTranslation_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_1_Result: UE.Transform;
            RigVMModel___SetTranslation_2_1_Value: UE.Vector;
            RigVMModel___SetTranslation_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_3_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_3_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_4_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_4_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_4_Transform: UE.Transform;
            RigVMModel___GetTransform_6_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_3_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_4_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_4_1_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_3_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_4_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_3_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_3_1_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_3_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_3_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_5_Transform: UE.Transform;
            RigVMModel___GetTransform_6_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_4_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_3_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_3_1_Swing: UE.Quat;
            RigVMModel___SetRotation_2_1_3_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_3_1_Result: UE.Transform;
            RigVMModel___GetTransform_4_1_Transform: UE.Transform;
            RigVMModel___GetTransform_4_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_3_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_2_1_1_Value: UE.Vector;
            RigVMModel___SetTranslation_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_3_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_3_1_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_4_1_Result: UE.Transform;
            RigVMModel___SetTranslation_2_1_1_1_Value: UE.Vector;
            RigVMModel___SetTranslation_2_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_2_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_2_Result: UE.Quat;
            RigVMModel___SetRotation_2_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetRotation_2_1_3_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_3_Result: UE.Transform;
            RigVMModel___GetTransform_3_Transform: UE.Transform;
            RigVMModel___GetTransform_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_2_Transform: UE.Transform;
            RigVMModel___GetTransform_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_3_Value: UE.Vector;
            RigVMModel___SetTranslation_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_2_Result: UE.Quat;
            RigVMModel___SetRotation_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_2_Result: UE.Transform;
            RigVMModel___SetTranslation_3_1_Value: UE.Vector;
            RigVMModel___SetTranslation_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_2_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_2_2_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_2_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_1_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_2_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_2_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_2_2_Result: UE.Quat;
            RigVMModel___SetRotation_2_1_3_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_2_2_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_2_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_2_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_2_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_Swing: UE.Quat;
            RigVMModel___SetRotation_2_1_3_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_2_2_Result: UE.Transform;
            RigVMModel___GetTransform_3_2_Transform: UE.Transform;
            RigVMModel___GetTransform_3_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_2_2_Transform: UE.Transform;
            RigVMModel___GetTransform_1_2_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_3_1_1_Value: UE.Vector;
            RigVMModel___SetTranslation_3_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetRotation_2_1_3_2_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_3_2_Result: UE.Transform;
            RigVMModel___SetTranslation_3_1_1_1_Value: UE.Vector;
            RigVMModel___SetTranslation_3_1_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_3_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_3_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_3_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_1_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_2_1_Result: UE.Quat;
            RigVMModel___SetRotation_2_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetRotation_2_1_3_2_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_3_1_Result: UE.Transform;
            RigVMModel___GetTransform_3_1_Transform: UE.Transform;
            RigVMModel___GetTransform_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_2_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_4_Value: UE.Vector;
            RigVMModel___SetTranslation_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_1_2_1_Result: UE.Quat;
            RigVMModel___SetRotation_3_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_2_1_Result: UE.Transform;
            RigVMModel___SetTranslation_4_1_Value: UE.Vector;
            RigVMModel___SetTranslation_4_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionMul_2_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_3_2_2_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_2_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_2_2_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_4_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_4_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_4_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_2_2_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_2_Swing: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_2_2_2_Result: UE.Quat;
            RigVMModel___MathQuaternionInverse_2_2_2_1_Result: UE.Quat;
            RigVMModel___SetRotation_3_2_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSlerp_2_2_2_1_1_Result: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_1_Twist: UE.Quat;
            RigVMModel___MathTransformMakeRelative_3_2_2_1_1_Local: UE.Transform;
            RigVMModel___GetTransform_6_3_1_5_Transform: UE.Transform;
            RigVMModel___GetTransform_6_3_1_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_6_1_2_1_5_Transform: UE.Transform;
            RigVMModel___GetTransform_6_1_2_1_5_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_1_Input: UE.Quat;
            RigVMModel___MathQuaternionSwingTwist_2_2_1_1_Swing: UE.Quat;
            RigVMModel___SetRotation_3_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_1_2_2_1_Result: UE.Transform;
            RigVMModel___GetTransform_3_2_1_Transform: UE.Transform;
            RigVMModel___GetTransform_3_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_2_2_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_2_2_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetTranslation_4_1_1_Value: UE.Vector;
            RigVMModel___SetTranslation_4_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___SetRotation_3_2_1_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___MathTransformLerp_3_2_1_Result: UE.Transform;
            RigVMModel___SetTranslation_4_1_2_Value: UE.Vector;
            RigVMModel___SetTranslation_4_1_2_CachedIndex: TArray<UE.CachedRigElement>;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_工作;
            static Load(InName: string): RigVMMemory_工作;
        
            __tid_RigVMMemory_工作_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4AC5A9F94641E5CE0D39F98028C9CF48
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_Procedural {
        class RigVMMemory_文字 extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            RigVMModel___SetRotation_2_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_Space__Const: UE.ERigVMTransformSpace;
            RigVMModel___SetRotation_2_bInitial__Const: boolean;
            RigVMModel___GetTransform_6_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_1_bInitial__Const: boolean;
            RigVMModel___MathQuaternionSwingTwist_TwistAxis__Const: UE.Vector;
            RigVMModel___MathQuaternionSlerp_2_B__Const: UE.Quat;
            RigVMModel___MathQuaternionSlerp_2_T__Const: number;
            RigVMModel___SetRotation_2_Weight__Const: number;
            RigVMModel___SetRotation_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathQuaternionSlerp_T__Const: number;
            RigVMModel___SetTranslation_Space__Const: UE.ERigVMTransformSpace;
            RigVMModel___GetTransform_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathTransformLerp_T__Const: number;
            RigVMModel___SetRotation_2_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathQuaternionSlerp_1_T__Const: number;
            RigVMModel___MathTransformLerp_1_T__Const: number;
            RigVMModel___SetRotation_2_1_2_Item__Const: UE.RigElementKey;
            RigVMModel___MathQuaternionSlerp_2_3_T__Const: number;
            RigVMModel___SetRotation_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_5_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathQuaternionSlerp_4_T__Const: number;
            RigVMModel___SetRotation_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_2_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_3_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_1_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_5_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_1_1_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_3_1_Item__Const: UE.RigElementKey;
            RigVMModel___MathQuaternionSlerp_2_2_T__Const: number;
            RigVMModel___SetRotation_2_1_3_2_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_1_2_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_3_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_2_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_3_1_2_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_2_1_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_2_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_3_1_3_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_2_1_3_2_2_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_1_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_3_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_3_2_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_3_2_1_Item__Const: UE.RigElementKey;
            RigVMModel___GetTransform_6_3_1_5_Item__Const: UE.RigElementKey;
            RigVMModel___SetRotation_3_2_1_1_Item__Const: UE.RigElementKey;
            RigVMModel___SetTranslation_4_1_2_Item__Const: UE.RigElementKey;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_文字;
            static Load(InName: string): RigVMMemory_文字;
        
            __tid_RigVMMemory_文字_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: D15053F14F3F1ACE6E557BA7F613C721
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_Body {
        class CR_Mannequin_Body_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["L Arm IK Mode"]: boolean;
            ["R Arm IK Mode"]: boolean;
            ["L Leg IK Mode "]: boolean;
            ["R Leg IK Mode"]: boolean;
            ["Spine IK Mode"]: boolean;
            ["Neck IK Mode"]: boolean;
            ["Spine Offsets"]: TArray<UE.Transform>;
            ["Spine Length"]: number;
            ["Neck Length"]: number;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CR_Mannequin_Body_C;
            static Load(InName: string): CR_Mannequin_Body_C;
        
            __tid_CR_Mannequin_Body_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: BCA382AF41A385E6A0A542867C8059AA
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_BasicFootIK {
        class CR_Mannequin_BasicFootIK_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ZOffset_L_Target: number;
            ZOffset_R_Target: number;
            ZOffset_L: number;
            ZOffset_R: number;
            ZOffset_Pelvis: number;
            ShouldDoIKTrace: boolean;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CR_Mannequin_BasicFootIK_C;
            static Load(InName: string): CR_Mannequin_BasicFootIK_C;
        
            __tid_CR_Mannequin_BasicFootIK_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: BCA382AF41A385E6A0A542867C8059AA
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_BasicFootIK {
        class RigVMMemory_Literal extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            LocalVariableDefault__FootTrace_AnimatedFloorLocation__Const: UE.Vector;
            FootTrace_FootTrace_MathVectorAdd_A__Const: UE.Vector;
            FootTrace_FootTrace_GetTransform_Item__Const: UE.RigElementKey;
            FootTrace_FootTrace_GetTransform_Space__Const: UE.ERigVMTransformSpace;
            FootTrace_FootTrace_GetTransform_bInitial__Const: boolean;
            FootTrace_FootTrace_MathFloatAdd_B__Const: number;
            FootTrace_FootTrace_GetTransform_1_Item__Const: UE.RigElementKey;
            FootTrace_FootTrace_MathVectorAdd_B__Const: UE.Vector;
            FootTrace_FootTrace_RigUnit_VisualDebugVectorItemSpace_1_bEnabled__Const: boolean;
            FootTrace_FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Mode__Const: number;
            FootTrace_FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Color__Const: UE.LinearColor;
            FootTrace_FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Thickness__Const: number;
            FootTrace_FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Scale__Const: number;
            FootTrace_FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Space__Const: UE.RigElementKey;
            FootTrace_FootTrace_MathVectorSub_B__Const: UE.Vector;
            FootTrace_FootTrace_RigUnit_VisualDebugVectorItemSpace_2_Mode__Const: number;
            FootTrace_FootTrace_SphereTraceByTraceChannel_TraceChannel__Const: UE.ETraceTypeQuery;
            FootTrace_FootTrace_SphereTraceByTraceChannel_Radius__Const: number;
            FootTrace_FootTrace_RigUnit_VisualDebugVectorItemSpace_Mode__Const: number;
            FootTrace_1_FootTrace_1_GetTransform_Item__Const: UE.RigElementKey;
            FootTrace_1_FootTrace_1_RigUnit_VisualDebugVectorItemSpace_1_Mode__Const: number;
            FootTrace_1_FootTrace_1_RigUnit_VisualDebugVectorItemSpace_2_Mode__Const: number;
            FootTrace_1_FootTrace_1_SphereTraceByTraceChannel_TraceChannel__Const: UE.ETraceTypeQuery;
            FootTrace_1_FootTrace_1_RigUnit_VisualDebugVectorItemSpace_Mode__Const: number;
            VariableNode_9_Value__Const: number;
            AlphaInterp_Bias__Const: number;
            AlphaInterp_InRange__Const: UE.InputRange;
            AlphaInterp_InterpSpeedIncreasing__Const: number;
            ModifyTransforms_ItemToModify__Const: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            ModifyTransforms_Mode__Const: UE.EControlRigModifyBoneMode;
            ModifyTransforms_1_ItemToModify__Const: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            ModifyTransforms_1_1_ItemToModify__Const: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            PBIK_Root__Const: string;
            PBIK_Effectors__Const: TArray<UE.PBIKEffector>;
            PBIK_BoneSettings__Const: TArray<UE.PBIKBoneSetting>;
            PBIK_ExcludedBones__Const: TArray<string>;
            PBIK_Settings__Const: UE.PBIKSolverSettings;
            PBIK_Debug__Const: UE.PBIKDebug;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_Literal;
            static Load(InName: string): RigVMMemory_Literal;
        
            __tid_RigVMMemory_Literal_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: BCA382AF41A385E6A0A542867C8059AA
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_BasicFootIK {
        class RigVMMemory_Work extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ExecuteContext_: UE.ControlRigExecuteContext;
            FootTrace_FootTrace_SphereTraceByTraceChannel_HitLocation: UE.Vector;
            FootTrace_FootTrace_MathVectorAdd_Result: UE.Vector;
            FootTrace_FootTrace_GetTransform_Transform: UE.Transform;
            FootTrace_FootTrace_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            FootTrace_FootTrace_MathFloatAdd_Result: number;
            FootTrace_FootTrace_MathFloatAdd_A: number;
            FootTrace_FootTrace_GetTransform_1_Transform: UE.Transform;
            FootTrace_FootTrace_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            FootTrace_FootTrace_MathVectorAdd_A__IO: UE.Vector;
            FootTrace_FootTrace_MathVectorSub_Result: UE.Vector;
            FootTrace_FootTrace_MathVectorSub_A__IO: UE.Vector;
            FootTrace_FootTrace_SphereTraceByTraceChannel_bHit: boolean;
            FootTrace_FootTrace_SphereTraceByTraceChannel_HitNormal: UE.Vector;
            FootTrace_1_FootTrace_1_SphereTraceByTraceChannel_HitLocation: UE.Vector;
            FootTrace_1_FootTrace_1_MathVectorAdd_Result: UE.Vector;
            FootTrace_1_FootTrace_1_GetTransform_Transform: UE.Transform;
            FootTrace_1_FootTrace_1_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            FootTrace_1_FootTrace_1_MathFloatAdd_Result: number;
            FootTrace_1_FootTrace_1_MathFloatAdd_A: number;
            FootTrace_1_FootTrace_1_GetTransform_1_Transform: UE.Transform;
            FootTrace_1_FootTrace_1_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            FootTrace_1_FootTrace_1_MathVectorAdd_A__IO: UE.Vector;
            FootTrace_1_FootTrace_1_MathVectorSub_Result: UE.Vector;
            FootTrace_1_FootTrace_1_MathVectorSub_A__IO: UE.Vector;
            FootTrace_1_FootTrace_1_SphereTraceByTraceChannel_bHit: boolean;
            FootTrace_1_FootTrace_1_SphereTraceByTraceChannel_HitNormal: UE.Vector;
            AlphaInterp_Result: number;
            AlphaInterp_Value: number;
            AlphaInterp_ScaleBiasClamp: TArray<UE.InputScaleBiasClamp>;
            AlphaInterp_1_Result: number;
            AlphaInterp_1_Value: number;
            AlphaInterp_1_ScaleBiasClamp: TArray<UE.InputScaleBiasClamp>;
            If_Result: number;
            MathFloatLess_Result: boolean;
            MathFloatLess_A: number;
            MathFloatLess_B: number;
            If_True: number;
            If_False: number;
            ModifyTransforms_ItemToModify__IO: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            ModifyTransforms_WorkData: TArray<UE.RigUnit_ModifyTransforms_WorkData>;
            ModifyTransforms_1_ItemToModify__IO: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            ModifyTransforms_1_WorkData: TArray<UE.RigUnit_ModifyTransforms_WorkData>;
            ModifyTransforms_1_1_ItemToModify__IO: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            ModifyTransforms_1_1_WorkData: TArray<UE.RigUnit_ModifyTransforms_WorkData>;
            GetTransform_Transform: UE.Transform;
            GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            GetTransform_1_Transform: UE.Transform;
            GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            PBIK_Effectors__IO: TArray<UE.PBIKEffector>;
            PBIK_EffectorSolverIndices: TArray<TArray<number>>;
            PBIK_BoneSettingToSolverBoneIndex: TArray<TArray<number>>;
            PBIK_SolverBoneToElementIndex: TArray<TArray<number>>;
            PBIK_Solver: TArray<UE.PBIKSolver>;
            PBIK_bNeedsInit: TArray<boolean>;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_Work;
            static Load(InName: string): RigVMMemory_Work;
        
            __tid_RigVMMemory_Work_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: BCA382AF41A385E6A0A542867C8059AA
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_BasicFootIK {
        class RigVMMemory_工作 extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            RigVMModel___FootTrace_Offset: UE.Vector;
            FootTrace___FootTrace_MathVectorAdd_Result: UE.Vector;
            FootTrace___FootTrace_GetTransform_Transform: UE.Transform;
            FootTrace___FootTrace_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            FootTrace___FootTrace_MathFloatAdd_Result: number;
            FootTrace___FootTrace_MathFloatAdd_A: number;
            FootTrace___FootTrace_GetTransform_1_Transform: UE.Transform;
            FootTrace___FootTrace_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            FootTrace___FootTrace_MathVectorAdd_A__IO: UE.Vector;
            FootTrace___FootTrace_MathVectorSub_Result: UE.Vector;
            FootTrace___FootTrace_MathVectorSub_A__IO: UE.Vector;
            FootTrace___FootTrace_SphereTraceByTraceChannel_bHit: boolean;
            FootTrace___FootTrace_SphereTraceByTraceChannel_HitNormal: UE.Vector;
            RigVMModel___FootTrace_1_Offset: UE.Vector;
            FootTrace_1___FootTrace_MathVectorAdd_Result: UE.Vector;
            FootTrace_1___FootTrace_GetTransform_Transform: UE.Transform;
            FootTrace_1___FootTrace_GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            FootTrace_1___FootTrace_MathFloatAdd_Result: number;
            FootTrace_1___FootTrace_MathFloatAdd_A: number;
            FootTrace_1___FootTrace_GetTransform_1_Transform: UE.Transform;
            FootTrace_1___FootTrace_GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            FootTrace_1___FootTrace_MathVectorAdd_A__IO: UE.Vector;
            FootTrace_1___FootTrace_MathVectorSub_Result: UE.Vector;
            FootTrace_1___FootTrace_MathVectorSub_A__IO: UE.Vector;
            FootTrace_1___FootTrace_SphereTraceByTraceChannel_bHit: boolean;
            FootTrace_1___FootTrace_SphereTraceByTraceChannel_HitNormal: UE.Vector;
            RigVMModel___Branch_RigVMUnitNode_BlockToRun: string;
            RigVMModel___AlphaInterp_Result: number;
            RigVMModel___AlphaInterp_Value: number;
            RigVMModel___AlphaInterp_ScaleBiasClamp: TArray<UE.InputScaleBiasClamp>;
            RigVMModel___AlphaInterp_1_Result: number;
            RigVMModel___AlphaInterp_1_Value: number;
            RigVMModel___AlphaInterp_1_ScaleBiasClamp: TArray<UE.InputScaleBiasClamp>;
            RigVMModel___If_Result: number;
            RigVMModel___MathFloatLess_Result: boolean;
            RigVMModel___MathFloatLess_A: number;
            RigVMModel___MathFloatLess_B: number;
            RigVMModel___If_Condition: boolean;
            RigVMModel___If_True: number;
            RigVMModel___If_False: number;
            RigVMModel___ModifyTransforms_ItemToModify__IO: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            RigVMModel___ModifyTransforms_WorkData: TArray<UE.RigUnit_ModifyTransforms_WorkData>;
            RigVMModel___ModifyTransforms_1_ItemToModify__IO: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            RigVMModel___ModifyTransforms_1_WorkData: TArray<UE.RigUnit_ModifyTransforms_WorkData>;
            RigVMModel___ModifyTransforms_1_1_ItemToModify__IO: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            RigVMModel___ModifyTransforms_1_1_WorkData: TArray<UE.RigUnit_ModifyTransforms_WorkData>;
            RigVMModel___GetTransform_Transform: UE.Transform;
            RigVMModel___GetTransform_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___GetTransform_1_Transform: UE.Transform;
            RigVMModel___GetTransform_1_CachedIndex: TArray<UE.CachedRigElement>;
            RigVMModel___PBIK_Effectors__IO: TArray<UE.PBIKEffector>;
            RigVMModel___PBIK_EffectorSolverIndices: TArray<TArray<number>>;
            RigVMModel___PBIK_WorkData: TArray<UE.PBIKWorkData>;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_工作;
            static Load(InName: string): RigVMMemory_工作;
        
            __tid_RigVMMemory_工作_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: BCA382AF41A385E6A0A542867C8059AA
    namespace Game.Characters.Mannequins.Rigs.CR_Mannequin_BasicFootIK {
        class RigVMMemory_文字 extends UE.RigVMMemoryStorage {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            RigVMModel___FootTrace_Ik_Foot_Bone__Const: UE.RigElementKey;
            LocalVariableDefault__FootTrace_AnimatedFloorLocation__Const: UE.Vector;
            FootTrace___FootTrace_MathVectorAdd_A__Const: UE.Vector;
            FootTrace___FootTrace_GetTransform_Space__Const: UE.ERigVMTransformSpace;
            FootTrace___FootTrace_GetTransform_bInitial__Const: boolean;
            FootTrace___FootTrace_MathFloatAdd_B__Const: number;
            FootTrace___FootTrace_GetTransform_1_Item__Const: UE.RigElementKey;
            FootTrace___FootTrace_MathVectorAdd_B__Const: UE.Vector;
            FootTrace___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_bEnabled__Const: boolean;
            FootTrace___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            FootTrace___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Color__Const: UE.LinearColor;
            FootTrace___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Thickness__Const: number;
            FootTrace___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Scale__Const: number;
            FootTrace___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Space__Const: UE.RigElementKey;
            FootTrace___FootTrace_MathVectorSub_B__Const: UE.Vector;
            FootTrace___FootTrace_RigUnit_VisualDebugVectorItemSpace_2_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            FootTrace___FootTrace_SphereTraceByTraceChannel_TraceChannel__Const: UE.ETraceTypeQuery;
            FootTrace___FootTrace_SphereTraceByTraceChannel_Radius__Const: number;
            FootTrace___FootTrace_RigUnit_VisualDebugVectorItemSpace_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            RigVMModel___FootTrace_1_Ik_Foot_Bone__Const: UE.RigElementKey;
            FootTrace_1___FootTrace_MathVectorAdd_A__Const: UE.Vector;
            FootTrace_1___FootTrace_GetTransform_Space__Const: UE.ERigVMTransformSpace;
            FootTrace_1___FootTrace_GetTransform_bInitial__Const: boolean;
            FootTrace_1___FootTrace_MathFloatAdd_B__Const: number;
            FootTrace_1___FootTrace_GetTransform_1_Item__Const: UE.RigElementKey;
            FootTrace_1___FootTrace_MathVectorAdd_B__Const: UE.Vector;
            FootTrace_1___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_bEnabled__Const: boolean;
            FootTrace_1___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            FootTrace_1___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Color__Const: UE.LinearColor;
            FootTrace_1___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Thickness__Const: number;
            FootTrace_1___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Scale__Const: number;
            FootTrace_1___FootTrace_RigUnit_VisualDebugVectorItemSpace_1_Space__Const: UE.RigElementKey;
            FootTrace_1___FootTrace_MathVectorSub_B__Const: UE.Vector;
            FootTrace_1___FootTrace_RigUnit_VisualDebugVectorItemSpace_2_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            FootTrace_1___FootTrace_SphereTraceByTraceChannel_TraceChannel__Const: UE.ETraceTypeQuery;
            FootTrace_1___FootTrace_SphereTraceByTraceChannel_Radius__Const: number;
            FootTrace_1___FootTrace_RigUnit_VisualDebugVectorItemSpace_Mode__Const: UE.ERigUnitVisualDebugPointMode;
            RigVMModel___VariableNode_9_Value__Const: number;
            RigVMModel___AlphaInterp_Scale__Const: number;
            RigVMModel___AlphaInterp_Bias__Const: number;
            RigVMModel___AlphaInterp_bMapRange__Const: boolean;
            RigVMModel___AlphaInterp_InRange__Const: UE.InputRange;
            RigVMModel___AlphaInterp_bInterpResult__Const: boolean;
            RigVMModel___AlphaInterp_InterpSpeedIncreasing__Const: number;
            RigVMModel___ModifyTransforms_ItemToModify__Const: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            RigVMModel___ModifyTransforms_Mode__Const: UE.EControlRigModifyBoneMode;
            RigVMModel___ModifyTransforms_1_ItemToModify__Const: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            RigVMModel___ModifyTransforms_1_1_ItemToModify__Const: TArray<UE.RigUnit_ModifyTransforms_PerItem>;
            RigVMModel___PBIK_Root__Const: string;
            RigVMModel___PBIK_Effectors__Const: TArray<UE.PBIKEffector>;
            RigVMModel___GetTransform_Space__Const: UE.ERigVMTransformSpace;
            RigVMModel___PBIK_BoneSettings__Const: TArray<UE.PBIKBoneSetting>;
            RigVMModel___PBIK_ExcludedBones__Const: TArray<string>;
            RigVMModel___PBIK_Settings__Const: UE.PBIKSolverSettings;
            RigVMModel___PBIK_Debug__Const: UE.PBIKDebug;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMMemory_文字;
            static Load(InName: string): RigVMMemory_文字;
        
            __tid_RigVMMemory_文字_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: C1D59D35467AAF2680C1A9B2A39F77B8
    namespace Game.Blueprints.TypeScript.TSGameMode {
        class TSGameMode_C extends UE.GameModeBase {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            DefaultSceneRoot: UE.SceneComponent;
            ExecuteUbergraph_TSGameMode(EntryPoint: number) : void;
            GM(funcName: string, params: string) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TSGameMode_C;
            static Load(InName: string): TSGameMode_C;
        
            __tid_TSGameMode_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: FEB470E4480A7C5613F519A3E7503EB0
    namespace Game.ThirdPerson.Blueprints.W_TestWidget {
        class W_TestWidget_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            btnTest: UE.Button;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): W_TestWidget_C;
            static Load(InName: string): W_TestWidget_C;
        
            __tid_W_TestWidget_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: BEC6E9AD4EB7496374CDD69F020C8248
    namespace Game.Blueprints.TypeScript.YGameInstance {
        class YGameInstance_C extends UE.GameInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): YGameInstance_C;
            static Load(InName: string): YGameInstance_C;
        
            __tid_YGameInstance_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: BDEE6F9F4F7F00BF3F1E6A8452090E94
    namespace Game.Blueprints.TypeScript.FrameWorkLoader {
        class FrameWorkLoader_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            DefaultSceneRoot: UE.SceneComponent;
            ExecuteUbergraph_FrameWorkLoader(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FrameWorkLoader_C;
            static Load(InName: string): FrameWorkLoader_C;
        
            __tid_FrameWorkLoader_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 1243E34A4576AE8EA45B1985EEBF70D8
    namespace Game.Blueprints.TypeScript.TestActor {
        class TestActor_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            DefaultSceneRoot: UE.SceneComponent;
            ExecuteUbergraph_TestActor(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TestActor_C;
            static Load(InName: string): TestActor_C;
        
            __tid_TestActor_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7B7D15D645E3A2E94B557BBACCFA9D39
    namespace Game.Characters.Mannequins.Animations.ABP_Manny {
        class AnimBlueprintGeneratedMutableData extends UE.AnimBlueprintMutableData {
            constructor();
            constructor(__FloatProperty: number);
            __FloatProperty: number;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedMutableData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7B7D15D645E3A2E94B557BBACCFA9D39
    namespace Game.Characters.Mannequins.Animations.ABP_Manny {
        class ABP_Manny_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            __AnimBlueprintMutables: UE.Game.Characters.Mannequins.Animations.ABP_Manny.AnimBlueprintGeneratedMutableData;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_TransitionResult_7: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_6: UE.AnimNode_TransitionResult;
            AnimGraphNode_BlendSpacePlayer: UE.AnimNode_BlendSpacePlayer;
            AnimGraphNode_StateResult_5: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer_3: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_4: UE.AnimNode_StateResult;
            AnimGraphNode_StateMachine_1: UE.AnimNode_StateMachine;
            AnimGraphNode_SaveCachedPose: UE.AnimNode_SaveCachedPose;
            AnimGraphNode_TransitionResult_5: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_4: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_3: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_2: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult_1: UE.AnimNode_TransitionResult;
            AnimGraphNode_TransitionResult: UE.AnimNode_TransitionResult;
            AnimGraphNode_ApplyAdditive: UE.AnimNode_ApplyAdditive;
            AnimGraphNode_UseCachedPose_1: UE.AnimNode_UseCachedPose;
            AnimGraphNode_SequencePlayer_2: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_3: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer_1: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_2: UE.AnimNode_StateResult;
            AnimGraphNode_SequencePlayer: UE.AnimNode_SequencePlayer;
            AnimGraphNode_StateResult_1: UE.AnimNode_StateResult;
            AnimGraphNode_UseCachedPose: UE.AnimNode_UseCachedPose;
            AnimGraphNode_StateResult: UE.AnimNode_StateResult;
            AnimGraphNode_StateMachine: UE.AnimNode_StateMachine;
            AnimGraphNode_Slot: UE.AnimNode_Slot;
            AnimGraphNode_ControlRig: UE.AnimNode_ControlRig;
            __CustomProperty_ShouldDoIKTrace_385011E94C94F6DE70691192D3E0622C: boolean;
            Character: UE.Character;
            MovementComponent: UE.CharacterMovementComponent;
            Velocity: UE.Vector;
            GroundSpeed: number;
            ShouldMove: boolean;
            IsFalling: boolean;
            AnimGraph(AnimGraph: $Ref<UE.PoseLink>) : void;
            /*
             *Executed when the Animation is initialized
             */
            BlueprintInitializeAnimation() : void;
            /*
             *Executed when the Animation is updated
             */
            BlueprintUpdateAnimation(DeltaTimeX: number) : void;
            EvaluateGraphExposedInputs_ExecuteUbergraph_ABP_Manny_AnimGraphNode_TransitionResult_305F37BB4A5AD886760B8E99A5C561E1() : void;
            ExecuteUbergraph_ABP_Manny(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_Manny_C;
            static Load(InName: string): ABP_Manny_C;
        
            __tid_ABP_Manny_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7B7D15D645E3A2E94B557BBACCFA9D39
    namespace Game.Characters.Mannequins.Animations.ABP_Manny {
        class AnimBlueprintGeneratedConstantData extends UE.AnimBlueprintConstantData {
            constructor();
            constructor(__NameProperty_155: string, __NameProperty_156: string, __NameProperty_157: string, __NameProperty_158: string, __IntProperty_159: number, __FloatProperty_160: number, __NameProperty_161: string, __IntProperty_162: number, __BoolProperty_163: boolean, __FloatProperty_164: number, __StructProperty_165: UE.InputScaleBiasClampConstants, __FloatProperty_166: number, __BoolProperty_167: boolean, __EnumProperty_168: UE.EAnimSyncMethod, __ByteProperty_169: UE.EAnimGroupRole, __NameProperty_170: string, __IntProperty_171: number, __NameProperty_172: string, __NameProperty_173: string, __IntProperty_174: number, __StructProperty_175: UE.AnimNodeFunctionRef, AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess, AnimBlueprintExtension_Base: UE.AnimSubsystem_Base);
            __NameProperty_155: string;
            __NameProperty_156: string;
            __NameProperty_157: string;
            __NameProperty_158: string;
            __IntProperty_159: number;
            __FloatProperty_160: number;
            __NameProperty_161: string;
            __IntProperty_162: number;
            __BoolProperty_163: boolean;
            __FloatProperty_164: number;
            __StructProperty_165: UE.InputScaleBiasClampConstants;
            __FloatProperty_166: number;
            __BoolProperty_167: boolean;
            __EnumProperty_168: UE.EAnimSyncMethod;
            __ByteProperty_169: UE.EAnimGroupRole;
            __NameProperty_170: string;
            __IntProperty_171: number;
            __NameProperty_172: string;
            __NameProperty_173: string;
            __IntProperty_174: number;
            __StructProperty_175: UE.AnimNodeFunctionRef;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess;
            AnimBlueprintExtension_Base: UE.AnimSubsystem_Base;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedConstantData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: CEF0A70148D95DDBBC354F85E2B4BB63
    namespace Game.Characters.Mannequins.Animations.ABP_Quinn {
        class ABP_Quinn_C extends UE.Game.Characters.Mannequins.Animations.ABP_Manny.ABP_Manny_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            ExecuteUbergraph_ABP_Quinn(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_Quinn_C;
            static Load(InName: string): ABP_Quinn_C;
        
            __tid_ABP_Quinn_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: CEF0A70148D95DDBBC354F85E2B4BB63
    namespace Game.Characters.Mannequins.Animations.ABP_Quinn {
        class AnimBlueprintGeneratedConstantData extends UE.Game.Characters.Mannequins.Animations.ABP_Manny.AnimBlueprintGeneratedConstantData {
            constructor();
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedConstantData_1__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: F7C7AAA74586C76563A785A0FC324944
    namespace Game.Characters.Mannequins.Rigs.ABP_Quinn_PostProcess {
        class ABP_Quinn_PostProcess_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_LinkedInputPose: UE.AnimNode_LinkedInputPose;
            AnimGraphNode_ControlRig: UE.AnimNode_ControlRig;
            AnimGraphNode_PoseDriver_13: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_12: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_11: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_10: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_9: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_8: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_7: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_6: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_5: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_4: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_3: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_2: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_1: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver: UE.AnimNode_PoseDriver;
            AnimGraph(InPose: UE.PoseLink, AnimGraph: $Ref<UE.PoseLink>) : void;
            ExecuteUbergraph_ABP_Quinn_PostProcess(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_Quinn_PostProcess_C;
            static Load(InName: string): ABP_Quinn_PostProcess_C;
        
            __tid_ABP_Quinn_PostProcess_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: F7C7AAA74586C76563A785A0FC324944
    namespace Game.Characters.Mannequins.Rigs.ABP_Quinn_PostProcess {
        class AnimBlueprintGeneratedConstantData extends UE.AnimBlueprintConstantData {
            constructor();
            constructor(__NameProperty_49: string, __NameProperty_50: string, __StructProperty_51: UE.AnimNodeFunctionRef, AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess, AnimBlueprintExtension_Base: UE.AnimSubsystem_Base);
            __NameProperty_49: string;
            __NameProperty_50: string;
            __StructProperty_51: UE.AnimNodeFunctionRef;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess;
            AnimBlueprintExtension_Base: UE.AnimSubsystem_Base;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedConstantData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 32D949864AD588EA6612C69B65C3A997
    namespace Game.Characters.Mannequins.Rigs.ABP_Manny_PostProcess {
        class ABP_Manny_PostProcess_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_LinkedInputPose: UE.AnimNode_LinkedInputPose;
            AnimGraphNode_ControlRig: UE.AnimNode_ControlRig;
            AnimGraphNode_PoseDriver_13: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_12: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_11: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_10: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_9: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_8: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_7: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_6: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_5: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_4: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_3: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_2: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver_1: UE.AnimNode_PoseDriver;
            AnimGraphNode_PoseDriver: UE.AnimNode_PoseDriver;
            AnimGraph(InPose: UE.PoseLink, AnimGraph: $Ref<UE.PoseLink>) : void;
            ExecuteUbergraph_ABP_Manny_PostProcess(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ABP_Manny_PostProcess_C;
            static Load(InName: string): ABP_Manny_PostProcess_C;
        
            __tid_ABP_Manny_PostProcess_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 32D949864AD588EA6612C69B65C3A997
    namespace Game.Characters.Mannequins.Rigs.ABP_Manny_PostProcess {
        class AnimBlueprintGeneratedConstantData extends UE.AnimBlueprintConstantData {
            constructor();
            constructor(__NameProperty_49: string, __NameProperty_50: string, __StructProperty_51: UE.AnimNodeFunctionRef, AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess, AnimBlueprintExtension_Base: UE.AnimSubsystem_Base);
            __NameProperty_49: string;
            __NameProperty_50: string;
            __StructProperty_51: UE.AnimNodeFunctionRef;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystem_PropertyAccess;
            AnimBlueprintExtension_Base: UE.AnimSubsystem_Base;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedConstantData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 581FA66A4D77DBFD15054DA2F2470AE4
    namespace Game.Blueprints.TypeScript.character.BaseCharacter {
        class BaseCharacter_C extends UE.TPSCharacter {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            ExecuteUbergraph_BaseCharacter(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BaseCharacter_C;
            static Load(InName: string): BaseCharacter_C;
        
            __tid_BaseCharacter_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
}
