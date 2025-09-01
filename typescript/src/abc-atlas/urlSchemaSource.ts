// auto-generated from schema.kiwi
export const urlSchema = `

struct point2d {
    float x;
    float y;
}
struct box2d {
    point2d minCorner;
    point2d maxCorner;
}
struct Interval {
    float min;
    float max;
}

message NumericColor {
    Interval clampRange = 1;
    string nullColor = 2;
    bool invertMap = 3;
    string[] gradient = 4;
    string name = 5;
    string type = 6;
    bool excludeZeros=7;
    NullColoring nullColoring=8;
}

enum Projection {
    WEB_IMAGE=0;
    CARTESIAN=1;
}
enum Layout {
    Single = 1;
    DoubleVertical = 2;
    DoubleHorizontal = 3;
    TripleLeft = 4;
    TripleRight = 5;
    TripleBottom = 6;
    TripleTop =7;
    Quadruple = 8;
    QuadrupleRight = 9;
    QuadrupleBottom = 10;
    QuadrupleTop = 11;
    QuadrupleLeft = 12;
}

enum ColorMode {
    QUANTITATIVE=0;
    METADATA=1;
}
message Slide {
    string id=1;
    string value=2;
    int priorityOrder=3;
}
message Camera {
    Projection projection=1;
    point2d center=2;
    point2d size=3;
    string gridFeatureId=4;
    box2d slideBounds=5;
    bool hideUnselected=6;
    int offsetIndex=7;
}

enum FilterType {
    METADATA=0;
    QUANTITATIVE=1;
    GENE=2;
}

message FilterCategory {
    string categoryId=1;
    string[] selectedValues=2;
    
}

enum NullColoring {
    HIDE=0;
    ZEROS=1;
    COLOR=2;
}

message QuantitativeFilter {
    int index=1;
    string symbol=2;
    Interval range=3;
}

enum ColorOption {
    NONE=0;
    DEFAULT=1;
    CUSTOM=2;
}

message DrawStyle {
    ColorOption option=1;
    string color=2;
    int opacity=3;
}

message Annotation {
    string referenceId=1;
    string featureTypeReferenceId=2;
    bool isInFront=3;
    DrawStyle fill=4;
    DrawStyle stroke=5;
}

message Gene {
    string symbol=1;
}

message ColorSettings {
    ColorMode mode=1;
    string value=2;
    float transparency=3;
    bool isTransparent=4;
    Interval range=5;
    int index=6;
    NumericColor color=7;
}

message Visualization {
    string dataCollectionId=1;
    // plotId is now datasetId, here to preserve backwards compatibility
    string plotId=2;
    FilterCategory[] metadataFilters=3;
    Camera camera=4;
    Gene[] genes=5;
    ColorSettings colorBy=6;
    string datasetId=7;
    string visualizationId=8;
    string projectId=9;
    QuantitativeFilter[] quantitativeFilters=10;
    Annotation annotation=11;
}
message ExplorePageInitPayload {
    Visualization[] frames=1;
    Layout layout=2;
}`;
